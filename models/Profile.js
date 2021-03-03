const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  interests: {
    climateNews: Number,
    corporateInsights: Number,
    climateAdvocacy: Number,
    sustainabilityResearch: Number,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
