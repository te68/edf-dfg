const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check } = require("express-validator");

const authControllers = require("../../controllers/auth");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, authControllers.getUser);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  authControllers.authenticateUser
);

module.exports = router;
