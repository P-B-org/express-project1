const Post = require("../models/Post.model");

module.exports.newPost = (req, res, next) => {
  res.render("user/new-post");
};

module.exports.doNewPost = (req, res, next) => {
  const newPost = {
    ...req.body,
    user: req.user.id,
  };

  if (req.file) {
    newPost.image = req.file.path
  }

  Post.create(newPost)
    .then((post) => {
      res.redirect("/timeline");
    })
    .catch((err) => {
      if (mongoose.Error.ValidationError) {
        res.render("user/new-post", {
          tweet: req.body.body,
          errors: err.errors,
        });
      }
      next(err);
    });
};
