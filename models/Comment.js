var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  text: String,
  title: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comment: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
