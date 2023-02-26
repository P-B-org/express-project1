const hbs = require("hbs");
const path = require("path");

hbs.registerPartials(path.join(__dirname, "../views/partials"));

hbs.registerHelper("isFollow", function (options) {
  const { userFollower, userFollowed } = options.hash;

  if (
    userFollower.followeds.some(
      (follow) => follow.followed._id.toString() === userFollowed._id.toString()
    )
  ) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("mutualFollow", function (options) {
  const { userFollower, userFollowed } = options.hash;

  const isUserFollowing = userFollower.followeds.some(
    (follow) => follow.followed._id.toString() === userFollowed._id.toString()
  );
  const isUserFollowed = userFollower.followers.some(
    (follow) => follow.follower._id.toString() === userFollowed._id.toString()
  );

  if (isUserFollowing && isUserFollowed) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("isOwner", function (options) {
  const { currentUser, postOwnerId } = options.hash;

  if (currentUser && currentUser.id === postOwnerId) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("hasLike", function (options) {
  const { currentUser, post } = options.hash;

  if (currentUser.likes.some((like) => like.post.toString() === post.id)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
