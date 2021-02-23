//node imports
const express = require("express");
const profileControllers = require("../../controllers/profile");
//local imports
const auth = require("../../middleware/auth");
const router = express.Router();

// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get("/me", auth, profileControllers.getProfile);

// @route  POST api/profile/profile
// @desc   Create or update a user Profile
// @access Private
router.post("/", auth, profileControllers.createUpdateProfile);

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get("/user/:user_id", profileControllers.getProfileById);
module.exports = router;
