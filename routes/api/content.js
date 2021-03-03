// node imports
const express = require("express");
const { body } = require("express-validator");

// local imports
const contentControllers = require("../../controllers/content");
const auth = require("../../middleware/auth");

const router = express.Router();

// @route    GET /api/content
// @desc     Get content items
// @access   Private
router.get("/", auth, contentControllers.getContent);

// @route    POST /api/content
// @desc     Create new content
// @access   Private
router.post(
  "/",
  auth,
  // validation
  [
    body("title").notEmpty(),
    body("url").notEmpty(),
    body("preview").notEmpty(),
    body("author").notEmpty(),
    body("contentType").notEmpty(),
  ],
  contentControllers.createContent
);

// @route    PUT /api/content/<contentId>
// @desc     Edit specific content
// @access   Private
router.put(
  "/:contentId",
  auth,
  // validation
  [
    body("title").notEmpty(),
    body("url").notEmpty(),
    body("preview").notEmpty(),
    body("contentType").notEmpty(),
    body("categories").notEmpty(),
    body("likes").notEmpty(),
    body("dislikes").notEmpty(),
    body("celebrates").notEmpty(),
  ],
  contentControllers.updateContent
);

// @route    DELETE /api/content/<contentId>
// @desc     Delete content
// @access   Private
router.delete("/:contentId", auth, contentControllers.deleteContent);

// @route    GET /api/content/<contentId>
// @desc     Get specific article
// @access   Private
router.get("/:contentId", auth, contentControllers.getContentDetails);

module.exports = router;
