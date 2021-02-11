// node imports
const express = require("express");
const { body } = require("express-validator");

// local imports
const articlesController = require("../../controllers/articles");
const auth = require("../../middleware/auth");

const router = express.Router();

// @route    GET /api/articles
// @desc     Get articles
// @access   Private
router.get("/", auth, articlesController.getArticles);

// @route    POST /api/articles
// @desc     Create new article
// @access   Private
router.post(
  "/",
  auth,
  // validation
  [body("title").notEmpty(), body("author").notEmpty()],
  articlesController.createArticle
);

// @route    PUT /api/articles/<articleId>
// @desc     Edit specific article
// @access   Private
router.put(
  "/:articleId",
  auth,
  // validation
  [body("title").notEmpty(), body("author").notEmpty()],
  articlesController.updateArticle
);

// @route    DELETE /api/articles/<articleId>
// @desc     Delete articles
// @access   Private
router.delete("/:articleId", auth, articlesController.deleteArticle);

// @route    GET /api/articles/<articleId>
// @desc     Get specific article
// @access   Private
router.get("/:articleId", auth, articlesController.getArticle);

module.exports = router;
