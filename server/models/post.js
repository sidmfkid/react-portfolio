const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  channel: {
    type: Schema.Types.ObjectId,
    ref: "Channel",
  },
  images: [
    {
      type: String,
    },
  ],
  title: String,
  datePosted: String,
  views: Number,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
