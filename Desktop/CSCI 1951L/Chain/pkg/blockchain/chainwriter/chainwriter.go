package chainwriter

import (
	"Chain/pkg/block"
	"Chain/pkg/blockchain/blockinfodatabase"
	"Chain/pkg/pro"
	"Chain/pkg/utils"
	"google.golang.org/protobuf/proto"
	"log"
	"os"
	"strconv"
)

// ChainWriter handles all I/O for the BlockChain. It stores and retrieves
// Blocks and UndoBlocks.
// See config.go for more information on its fields.
// Block files are of the format:
// "DataDirectory/BlockFileName_CurrentBlockFileNumber.FileExtension"
// Ex: "data/block_0.txt"
// UndoBlock files are of the format:
// "DataDirectory/UndoFileName_CurrentUndoFileNumber.FileExtension"
// Ex: "data/undo_0.txt"
type ChainWriter struct {
	// data storage information
	FileExtension string
	DataDirectory string

	// block information
	BlockFileName          string
	CurrentBlockFileNumber uint32
	CurrentBlockOffset     uint32
	MaxBlockFileSize       uint32

	// undo block information
	UndoFileName          string
	CurrentUndoFileNumber uint32
	CurrentUndoOffset     uint32
	MaxUndoFileSize       uint32
}

// New returns a ChainWriter given a Config.
func New(config *Config) *ChainWriter {
	if err := os.MkdirAll(config.DataDirectory, 0700); err != nil {
		log.Fatalf("Could not create ChainWriter's data directory")
	}
	return &ChainWriter{
		FileExtension:          config.FileExtension,
		DataDirectory:          config.DataDirectory,
		BlockFileName:          config.BlockFileName,
		CurrentBlockFileNumber: 0,
		CurrentBlockOffset:     0,
		MaxBlockFileSize:       config.MaxBlockFileSize,
		UndoFileName:           config.UndoFileName,
		CurrentUndoFileNumber:  0,
		CurrentUndoOffset:      0,
		MaxUndoFileSize:        config.MaxUndoFileSize,
	}
}

// StoreBlock stores a Block and its corresponding UndoBlock to Disk,
// returning a BlockRecord that contains information for later retrieval.
func (cw *ChainWriter) StoreBlock(bl *block.Block, undoBlock *UndoBlock, height uint32) *blockinfodatabase.BlockRecord {
	// serialize block
	b := block.EncodeBlock(bl)
	serializedBlock, err := proto.Marshal(b)
	if err != nil {
		utils.Debug.Printf("Failed to marshal block")
	}
	// serialize undo block
	ub := EncodeUndoBlock(undoBlock)
	serializedUndoBlock, err := proto.Marshal(ub)
	if err != nil {
		utils.Debug.Printf("Failed to marshal undo block")
	}
	// write block to disk
	bfi := cw.WriteBlock(serializedBlock)
	// create an empty file info, which we will update if the function is passed an undo block.
	ufi := &FileInfo{}
	if undoBlock.Amounts != nil {
		ufi = cw.WriteUndoBlock(serializedUndoBlock)
	}

	return &blockinfodatabase.BlockRecord{
		Header:               bl.Header,
		Height:               height,
		NumberOfTransactions: uint32(len(bl.Transactions)),
		BlockFile:            bfi.FileName,
		BlockStartOffset:     bfi.StartOffset,
		BlockEndOffset:       bfi.EndOffset,
		UndoFile:             ufi.FileName,
		UndoStartOffset:      ufi.StartOffset,
		UndoEndOffset:        ufi.EndOffset,
	}
}

// WriteBlock writes a serialized Block to Disk and returns
// a FileInfo for storage information.
func (cw *ChainWriter) WriteBlock(serializedBlock []byte) *FileInfo {
	//TODO
	offset := uint32(len(serializedBlock))
	//filepath
	fp := cw.DataDirectory + "/" + cw.BlockFileName + "_" + strconv.Itoa(int(cw.CurrentBlockFileNumber)) + cw.FileExtension
	//if block is not too big for current file
	if offset+cw.CurrentBlockOffset <= cw.MaxBlockFileSize {
		writeToDisk(fp, serializedBlock)
		info := &FileInfo{fp, cw.CurrentBlockOffset, cw.CurrentBlockOffset + offset}
		cw.CurrentBlockOffset += offset
		return info
	} else {
		//increment current file number
		cw.CurrentBlockFileNumber += 1
		fpNew := cw.DataDirectory + "/" + cw.BlockFileName + "_" + strconv.Itoa(int(cw.CurrentBlockFileNumber)) + cw.FileExtension
		writeToDisk(fpNew, serializedBlock)
		//new file starts at 0 and goes to offset
		info := &FileInfo{fpNew, 0, offset}
		cw.CurrentBlockOffset = offset
		return info
	}
}

// WriteUndoBlock writes a serialized UndoBlock to Disk and returns
// a FileInfo for storage information.
func (cw *ChainWriter) WriteUndoBlock(serializedUndoBlock []byte) *FileInfo {
	//TODO
	offset := uint32(len(serializedUndoBlock))
	fp := cw.DataDirectory + "/" + cw.UndoFileName + "_" + strconv.Itoa(int(cw.CurrentUndoFileNumber)) + cw.FileExtension
	if offset+cw.CurrentUndoOffset <= cw.MaxUndoFileSize {
		writeToDisk(fp, serializedUndoBlock)
		info := &FileInfo{fp, cw.CurrentUndoOffset, cw.CurrentUndoOffset + offset}
		cw.CurrentUndoOffset += offset
		return info
	} else {
		//increment current file number to write to new file
		cw.CurrentUndoFileNumber += 1
		fpNew := cw.DataDirectory + "/" + cw.UndoFileName + "_" + strconv.Itoa(int(cw.CurrentUndoFileNumber)) + cw.FileExtension
		writeToDisk(fpNew, serializedUndoBlock)
		//new file starts at 0 and goes to offset
		info := &FileInfo{fpNew, 0, offset}
		cw.CurrentUndoOffset = offset
		return info
	}
}

// ReadBlock returns a Block given a FileInfo.
func (cw *ChainWriter) ReadBlock(fi *FileInfo) *block.Block {
	bytes := readFromDisk(fi)
	pb := &pro.Block{}
	if err := proto.Unmarshal(bytes, pb); err != nil {
		utils.Debug.Printf("failed to unmarshal block from file info {%v}", fi)
	}
	return block.DecodeBlock(pb)
}

// ReadUndoBlock returns an UndoBlock given a FileInfo.
func (cw *ChainWriter) ReadUndoBlock(fi *FileInfo) *UndoBlock {
	bytes := readFromDisk(fi)
	pub := &pro.UndoBlock{}
	if err := proto.Unmarshal(bytes, pub); err != nil {
		utils.Debug.Printf("failed to unmarshal undo block from file info {%v}", fi)
	}
	return DecodeUndoBlock(pub)
}
