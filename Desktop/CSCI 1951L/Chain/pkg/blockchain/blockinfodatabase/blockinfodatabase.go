package blockinfodatabase

import (
	"Chain/pkg/pro"
	"Chain/pkg/utils"
	"fmt"
	"github.com/syndtr/goleveldb/leveldb"
	"google.golang.org/protobuf/proto"
)

// BlockInfoDatabase is a wrapper for a levelDB
type BlockInfoDatabase struct {
	db *leveldb.DB
}

// New returns a BlockInfoDatabase given a Config
func New(config *Config) *BlockInfoDatabase {
	db, err := leveldb.OpenFile(config.DatabasePath, nil)
	if err != nil {
		utils.Debug.Printf("Unable to initialize BlockInfoDatabase with path {%v}", config.DatabasePath)
	}
	return &BlockInfoDatabase{db: db}
}

// StoreBlockRecord stores a BlockRecord in the BlockInfoDatabase.
func (blockInfoDB *BlockInfoDatabase) StoreBlockRecord(hash string, blockRecord *BlockRecord) {
	//TODO
	//no fuckn clue if I did this right lmfao
	br := EncodeBlockRecord(blockRecord)
	serializedRecord, err := proto.Marshal(br)
	if err != nil {
		fmt.Errorf("StoreBlockRecord unable to marshal block")
	}
	//idk if i can just convert the hash to byte type like this
	errPut := blockInfoDB.db.Put([]byte(hash), serializedRecord, nil)
	if errPut != nil {
		fmt.Errorf("StoreBlockRecord unable to put blockrecord into BlockInforDatabase")
	}
	//seems to work with tests
}

// GetBlockRecord returns a BlockRecord from the BlockInfoDatabase given
// the relevant block's hash.
func (blockInfoDB *BlockInfoDatabase) GetBlockRecord(hash string) *BlockRecord {
	//TODO
	block, err := blockInfoDB.db.Get([]byte(hash), nil)
	if err != nil {
		fmt.Errorf("GetBlockRecord unable to get blockrecord from blockInfoDB")
	}
	newRecord := &pro.BlockRecord{}
	errUnmarshal := proto.Unmarshal(block, newRecord)
	if errUnmarshal != nil {
		fmt.Errorf("GetBlockRecord unable to get Unmarshal block")
	}
	return DecodeBlockRecord(newRecord)
	//seems to work with tests
}
