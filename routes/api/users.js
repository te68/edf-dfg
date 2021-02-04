const express = require("express");
const { check } = require("express-validator/check");
const router = express.Router();

const usersControllers = require("../../controllers/users");

//@route  POST api/users
//@desc   Register User
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please Include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or  more characters"
    ).isLength({ min: 8 }),
  ],
  usersControllers.register
);

module.exports = router;
