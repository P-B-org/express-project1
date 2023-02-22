const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "Your post must have some content!"],
    maxLength: [320, "Max length must be 320 characters"]
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  image: {
    type: [String]
  },
},
{
  timestamps: true,
}
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post