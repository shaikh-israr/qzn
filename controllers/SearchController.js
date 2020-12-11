const Books = require("../models/Books");

const search = (req, res, next) => {
  var regex = new RegExp(req.params.title, "i");
  Books.find({ title: regex }).then((data) => {
    res.json(data);
  });
};

module.exports = {
  search,
};
