// node imports
const { validationResult } = require("express-validator");

// internal imports
const Petition = require("../models/Petition");

// get an array of petitions to display (with pagination)
exports.getPetitions = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const petitionsPerPage = 10;

    const result = await Petition.paginate(
      {},
      { page, limit: petitionsPerPage }
    );

    res.json({
      petitions: result.docs,
      totalCount: result.total,
      totalPages: Math.ceil(result.total / petitionsPerPage),
    });
  } catch (error) {
    return next(error);
  }
};

// create petition
exports.createPetition = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    // parse body data
    const title = req.body.title;
    const url = req.body.url;

    // create new petition
    const petition = new Petition({
      title,
      url,
    });

    const result = await petition.save();

    res.status(201).json({ message: "Petition created", petition: result });
  } catch (error) {
    return next(error);
  }
};

// update
exports.updatePetition = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    // parse body data
    const title = req.body.title;
    const url = req.body.url;
    const petitionId = req.params.petitionId;

    // find petition in database
    const pet = await Petition.findById(petitionId);

    if (!pet) {
      const error = new Error("No petition with this id found");
      error.statusCode = 404;
      throw error;
    }

    // update
    pet.title = title;
    pet.url = url;

    const result = await pet.save();
    res.status(200).json({ message: "Petition updated", petition: result });
  } catch (error) {
    return next(error);
  }
};

// delete
exports.deletePetition = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  const petitionId = req.params.petitionId;

  try {
    // find petition
    const petition = await Petition.findById(petitionId);

    if (!petition) {
      const error = new Error("No petition with this id found");
      error.statusCode = 404;
      throw error;
    }

    // delete if no errors
    await Petition.findByIdAndDelete(petitionId);

    res.json({ message: "Petition deleted" });
  } catch (error) {
    return next(error);
  }
};

// get petition details
exports.getPetition = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    const petitionId = req.params.petitionId;

    // return petition details
    const result = await Petition.findById(petitionId);

    // petition not found
    if (!result) {
      const error = new Error("No petition with this id found");
      error.statusCode = 404;
      return next(error);
    }

    res.json(result);
  } catch (error) {
    return next(error);
  }
};
