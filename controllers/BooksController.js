const Books = require("../models/Books");

//book lists
const indexbook = (req, res, next) => {
  Books.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "error",
      });
    });
};

const bookwithid = (req, res, next) => {
  let bookId = req.params.bookId;
  Books.findById(bookId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      message: "error";
    });
};

const addbook = (req, res, next) => {
  let upldbook = new Books({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    isbn13: req.body.isbn13,
    isbn10: req.body.isbn10,
    publisher: req.body.publisher,
    edition: req.body.edition,
    height: req.body.height,
    width: req.body.width,
    binding: req.body.binding,
    spinewidth: req.body.spinewidth,
    pages: req.body.pages,
    availability: req.body.availability,
  });
  if (req.file) {
    upldbook.image = req.file.path;
  }
  upldbook
    .save()
    .then((response) => {
      res.json({
        message: "book add",
      });
    })
    .catch((error) => [
      res.json({
        message: "faild ",
      }),
    ]);
};

const updatedbook = (req, res, next) => {
  let bookId = req.params.bookId;
  let updatedbook = {
    title: req.body.title,
    prince: req.body.price,
    description: req.body.description,
    author: req.body.author,
    isbn13: req.body.isbn13,
    isbn10: req.body.isbn10,
    publisher: req.body.publisher,
    edition: req.body.edition,
    height: req.body.height,
    width: req.body.width,
    binding: req.body.binding,
    spinewidth: req.body.spinewidth,
    pages: req.body.pages,
    availability: req.body.availability,
  };
  Books.findByIdAndUpdate(bookId, { $set: updatedbook })
    .then(() => {
      res.json({
        message: "book update",
      });
    })
    .catch((error) => {
      res.json({
        message: "error",
      });
    });
};

const delbook = (req, res, next) => {
  let bookId = req.params.bookId;
  Books.findByIdAndRemove(bookId)
    .then(() => {
      res.json({
        message: "delete",
      });
    })
    .catch((error) => {
      res.json({
        message: "error",
      });
    });
};

module.exports = {
  indexbook,
  bookwithid,
  addbook,
  updatedbook,
  delbook,
};
