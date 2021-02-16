const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ArticleSchema = new mongoose.Schema(
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
      type: Schema.Types.ObjectId,
      ref: "user",
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

ArticleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("article", ArticleSchema);
