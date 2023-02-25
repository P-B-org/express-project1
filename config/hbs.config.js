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

hbs.registerHelper("isRead", function (options) {
  const { notification } = options.hash;

  if (notification.read === true) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
