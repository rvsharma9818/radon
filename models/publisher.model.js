const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    headquarter: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("newPublisher", PublisherSchema);
