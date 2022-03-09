const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  subscribers: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
