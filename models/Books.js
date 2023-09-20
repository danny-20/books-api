const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
