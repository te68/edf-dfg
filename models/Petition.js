const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PetitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

PetitionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("petition", PetitionSchema);
