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
    // parse body data
    const title = req.body.title;
    const url = req.body.url;
    const preview = req.body.preview;
    const authorId = req.body.authorId;
    const categories = [...req.body.categories];
    const likes = 0;
    const celebrates = 0;
    const dislikes = 0;

    // create article
    const article = new Article({
      title,
      url,
      preview,
      author: authorId,
      categories,
      likes,
      celebrates,
      dislikes,
    });

    const result = await article.save();

    res.status(201).json({ message: "Article created", article: result });
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
    // parse body data
    const articleId = req.body.articleId;
    const title = req.body.title;
    const url = req.body.url;
    const preview = req.body.preview;
    const authorId = req.body.authorId;
    const categories = [...req.body.categories];
    const likes = 0;
    const celebrates = 0;
    const dislikes = 0;

    // find article
    const article = await Article.findById(articleId);

    if (!article) {
      const error = new Error("No article found");
      error.statusCode = 404;
      throw error;
    }

    // check user is owner
    if (article.author.toString() != req.user.id) {
      const error = new Error("Forbidden");
      error.statusCode = 403;
      throw error;
    }

    // update
    article.title = title;
    article.url = url;
    article.preview = preview;
    article.categories = categories;
    article.likes = likes;
    article.dislikes = dislikes;
    article.celebrates = celebrates;

    const result = await article.save();
    res.status(200).json(result);
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
