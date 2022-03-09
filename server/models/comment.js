const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  user: String,
  datePosted: String,
  text: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
