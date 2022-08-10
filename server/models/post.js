import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  channel: {
    name: {
      type: String,
    },
    aviUrl: {
      type: String,
    },
  },
  videoUrl: {
    type: String,
  },
  info: { type: String },
  likes: Number,
  info: String,
  title: String,
  views: Number,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  thumbnail: String,
  tags: [{ type: String }],
  video: String,
  github: String,
  link: String,
  details: String,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
