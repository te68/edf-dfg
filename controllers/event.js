// node imports
const { validationResult } = require("express-validator");

// internal imports
const Event = require("../models/Event");

// get an array of event to display (with pagination)
exports.getEvents = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const eventsPerPage = 10;

    const result = await Event.paginate({}, { page, limit: eventsPerPage });

    res.json({
      events: result.docs,
      totalCount: result.total,
      totalPages: Math.ceil(result.total / eventsPerPage),
    });
  } catch (error) {
    return next(error);
  }
};

// create event
exports.createEvent = async (req, res, next) => {
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
    const date = req.body.date;
    const time = req.body.time;
    const address = req.body.address;
    const description = req.body.description;
    const categories = [...req.body.categories];

    // create new event
    const event = new Event({
      title,
      date,
      time,
      address,
      description,
      categories,
    });

    const result = await event.save();

    res.status(201).json({ message: "Event created", event: result });
  } catch (error) {
    return next(error);
  }
};

// update
exports.updateEvent = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    // parse body data
    const eventId = req.params.eventId;
    const title = req.body.title;
    const date = req.body.date;
    const time = req.body.time;
    const address = req.body.address;
    const description = req.body.description;
    const categories = [...req.body.categories];

    // find event in database
    const event = await Event.findById(eventId);

    if (!event) {
      const error = new Error("No event with this id found");
      error.statusCode = 404;
      throw error;
    }

    // no ownership for events

    // update
    event.title = title;
    event.date = date;
    event.time = time;
    event.address = address;
    event.description = description;
    event.categories = categories;

    const result = await event.save();
    res.status(200).json({ message: "Event updated", event: result });
  } catch (error) {
    return next(error);
  }
};

// delete
exports.deleteEvent = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  const eventId = req.params.eventId;

  try {
    // find event
    const event = await Event.findById(eventId);

    if (!event) {
      const error = new Error("No event with this id found");
      error.statusCode = 404;
      throw error;
    }

    // no ownership for events

    // delete if no errors
    const result = await Event.findByIdAndDelete(eventId);

    res.json({ message: "Event deleted" });
  } catch (error) {
    return next(error);
  }
};

// get event details
exports.getEvent = async (req, res, next) => {
  // checking validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    return next(err);
  }

  try {
    const eventId = req.params.eventId;

    // return event details with author's name
    const result = await Event.findById(eventId);

    // event not found
    if (!result) {
      const error = new Error("No event with this id found");
      error.statusCode = 404;
      return next(error);
    }

    res.json(result);
  } catch (error) {
    return next(error);
  }
};
