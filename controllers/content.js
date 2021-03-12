// node imports
const { validationResult } = require("express-validator");

// internal imports
const Content = require("../models/Content");

// get an array of content to display (with pagination)
exports.getContent = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const contentPerPage = 10;
    const filter = {};

    // handle search queries
    if (req.query.searchQuery) {
      filter = {
        ...filter,
        title: { $regex: req.query.searchQuery, $options: "i" },
      };
    }
    // handle categories
    if (req.query.category) {
      filter = {
        ...filter,
        category: req.query.category,
      };
    }

    const result = await Content.paginate(filter, {
      page,
      limit: contentPerPage,
      sort: { createdAt: -1 },
    });

    res.json({
      content: result.docs,
      totalCount: result.total,
      totalPages: Math.ceil(result.total / contentPerPage),
    });
  } catch (error) {
    return next(error);
  }
};

// create content
exports.createContent = async (req, res, next) => {
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
    const author = req.body.author;
    const interest = req.body.interest;
    const category = req.body.category;
    const likes = 0;
    const celebrates = 0;
    const dislikes = 0;

    // create new content
    const content = new Content({
      title,
      url,
      preview,
      author,
      interest,
      category,
      likes,
      celebrates,
      dislikes,
    });

    const result = await content.save();

    res.status(201).json({ message: "Content created", content: result });
  } catch (error) {
    return next(error);
  }
};

// update
exports.updateContent = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    // parse body data
    const contentId = req.params.contentId;
    const title = req.body.title;
    const url = req.body.url;
    const preview = req.body.preview;
    const interest = req.body.interest;
    const category = req.body.category;
    const likes = 0;
    const celebrates = 0;
    const dislikes = 0;

    // find content in database
    const content = await Content.findById(contentId);

    if (!content) {
      const error = new Error("No content with this id found");
      error.statusCode = 404;
      throw error;
    }

    // update
    content.title = title;
    content.url = url;
    content.preview = preview;
    content.interest = interest;
    content.category = category;
    content.likes = likes;
    content.dislikes = dislikes;
    content.celebrates = celebrates;

    const result = await content.save();
    res.status(200).json({ message: "Content Updated", content: result });
  } catch (error) {
    return next(error);
  }
};

// delete
exports.deleteContent = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  const contentId = req.params.contentId;

  try {
    // find content
    const content = await Content.findById(contentId);

    if (!content) {
      const error = new Error("No content with this id found");
      error.statusCode = 404;
      throw error;
    }

    // delete if no errors
    await Content.findByIdAndDelete(contentId);

    res.json({ message: "Content deleted" });
  } catch (error) {
    return next(error);
  }
};

// get content details
exports.getContentDetails = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    const contentId = req.params.contentId;

    // return content details
    const result = await Content.findById(contentId);

    // content not found
    if (!result) {
      const error = new Error("No content with this id found");
      error.statusCode = 404;
      return next(error);
    }

    res.json(result);
  } catch (error) {
    return next(error);
  }
};
