const User = require("../models/User.model");
const Follow = require("../models/Follow.model");
const { requestDailyHoroscope } = require("../services/base.service");

module.exports.explore = (req, res, next) => {
  User.find()
    .then((users) => {
      res.render("user/explore", { users });
    })
    .catch(next);
};

module.exports.profile = (req, res, next) => {
  requestDailyHoroscope(req.user.sunSign.name.toLowerCase())
    .then(function (response) {
      res.render("user/profile", { dailyHoroscope: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports.peopleProfile = (req, res, next) => {
    User.findById(req.params.id)
    .then(user => {
        res.render("user/otherProfile", { user })
    })
    .catch(next);
}

module.exports.follow = (req, res, next) => {
  const follower = req.user.id;
  const followed = req.params.id;

  const follow = {
    follower,
    followed,
  }

  Follow.findOne({ follower, followed })
    .then((dbFollow) => {
      if (dbFollow) {
        return Follow.findByIdAndDelete(dbFollow.id)
        .then((createdFollow) => {
          res.status(204).json({ deleted: true });
        });
      } else {
        return Follow.create(follow)
        .then(() => {
          //Notification.create()
          res.status(201).json({ ok: true });
        });
      }
    })
    .catch(next);
};

