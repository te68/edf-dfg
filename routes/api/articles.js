// node imports
const express = require("express");
const { body } = require("express-validator");

// local imports
const articlesController = require("../../controllers/articles");

const router = express.Router();
