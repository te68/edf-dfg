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
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: String,
      },
    ],
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
  },
  { timestamps: true }
);

ContentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("content", ContentSchema);
