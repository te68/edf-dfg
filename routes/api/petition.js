// node imports
const express = require("express");
const { body } = require("express-validator");

// local imports
const petitionControllers = require("../../controllers/petition");
const auth = require("../../middleware/auth");

const router = express.Router();

// @route    GET /api/petition
// @desc     Get petitions
// @access   Private
router.get("/", auth, petitionControllers.getPetitions);

// @route    POST /api/petition
// @desc     Create new petition
// @access   Private
router.post(
  "/",
  auth,
  // validation
  [body("title").notEmpty(), body("url").notEmpty()],
  petitionControllers.createPetition
);

// @route    PUT /api/petition/<petitionId>
// @desc     Edit specific petition
// @access   Private
router.put(
  "/:petitionId",
  auth,
  // validation
  [body("title").notEmpty(), body("url").notEmpty()],
  petitionControllers.updatePetition
);

// @route    DELETE /api/petition/<petitionId>
// @desc     Delete petition
// @access   Private
router.delete("/:petitionId", auth, petitionControllers.deletePetition);

// @route    GET /api/petition/<petitionId>
// @desc     Get specific petition
// @access   Private
router.get("/:petitionId", auth, petitionControllers.getPetition);

module.exports = router;
