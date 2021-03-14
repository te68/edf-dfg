const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    interest: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    celebrates: {
      type: Number,
      required: true,
    },
    dislikes: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

ContentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("content", ContentSchema);
