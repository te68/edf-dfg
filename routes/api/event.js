// node imports
const express = require("express");
const { body } = require("express-validator");

// local imports
const eventControllers = require("../../controllers/event");
const auth = require("../../middleware/auth");

const router = express.Router();

// @route    GET /api/event
// @desc     Get events
// @access   Private
router.get("/", auth, eventControllers.getEvents);

// @route    POST /api/event
// @desc     Create new event
// @access   Private
router.post(
  "/",
  auth,
  // validation
  [body("title").notEmpty(), body("date").isDate()],
  eventControllers.createEvent
);

// @route    PUT /api/event/<eventId>
// @desc     Edit specific event
// @access   Private
router.put(
  "/:eventId",
  auth,
  // validation
  [body("title").notEmpty(), body("date").isDate()],
  eventControllers.updateEvent
);

// @route    DELETE /api/event/<eventId>
// @desc     Delete event
// @access   Private
router.delete("/:eventId", auth, eventControllers.deleteEvent);

// @route    GET /api/event/<eventId>
// @desc     Get specific event
// @access   Private
router.get("/:eventId", auth, eventControllers.getEvent);

module.exports = router;
