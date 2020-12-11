const Comment = require("../models/Comment");

const userCommect = (req, res, next) => {
  let commectuser = new Comment({
    comment: req.body.comment,
  });
  commectuser
    .save()
    .then((response) => {
      res.json({
        message: "commet add",
      });
    })
    .catch((error) => [
      res.json({
        message: "faild ",
      }),
    ]);
};

module.exports = userCommect;
