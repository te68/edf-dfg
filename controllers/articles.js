// node imports
const { validationResult } = require("express-validator");
const Article = require("../models/Article");

// internal imports

// get articles
exports.getArticles = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const articlesPerPage = 10;

    const result = await Article.paginate({}, { page, limit: articlesPerPage });

    res.json({
      articles: result.docs,
      totalCount: result.total,
      totalPages: Math.ceil(result.total / articlesPerPage),
    });
  } catch (error) {
    return next(error);
  }
};

// create article
exports.createArticle = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    // TODO: parse body data
    // TODO: call model
  } catch (error) {
    return next(error);
  }
};

// update
exports.updateArticle = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    // TODO: parse body data
    // TODO: call model
  } catch (error) {
    return next(error);
  }
};

// delete
exports.deleteArticle = async (req, res, next) => {
  const articleId = req.params.articleId;

  // TODO: call model

  try {
  } catch (error) {
    return next(error);
  }
};

// get article details
exports.getArticle = (req, res, next) => {
  const articleId = req.params.articleId;

  // TODO: call model

  try {
  } catch (error) {
    return next(error);
  }
};
