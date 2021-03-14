const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
    categories: [
      {
        type: String,
      },
    ],
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

EventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("event", EventSchema);
