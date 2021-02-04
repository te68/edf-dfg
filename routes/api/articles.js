// node imports
const express = require("express");
const { body } = require("express-validator");

// local imports
const articlesController = require("../../controllers/articles");
const auth = require("../../middleware/auth");

const router = express.Router();

// GET /api/articles
router.get("/", auth, articlesController.getArticles);

// POST /api/articles
router.post(
  "/",
  auth,
  // validation
  [body("title").notEmpty(), body("author").notEmpty()],
  articlesController.createArticle
);

// PUT /api/articles/<articleId>
router.put(
  "/:articleId",
  auth,
  // validation
  [body("title").notEmpty(), body("author").notEmpty()],
  articlesController.updateArticle
);

// DELETE /api/articles/<articleId>
router.delete("/:articleId", auth, articlesController.deleteArticle);

// GET /api/articles/<articleId>
router.get("/:articleId", auth, articlesController.getArticle);

module.exports = router;
