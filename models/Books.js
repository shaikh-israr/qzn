const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    isbn13: {
      type: String,
    },
    isbn10: {
      type: String,
    },
    publisher: {
      type: String,
    },
    edition: {
      type: String,
    },
    height: {
      type: Number,
    },
    width: {
      type: String,
    },
    binding: {
      type: String,
    },
    spinewidth: {
      type: String,
    },
    pages: {
      type: Number,
    },
    availability: {
      type: String,
    },
    image: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;
