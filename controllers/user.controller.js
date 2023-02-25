const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Compatibility = require("../models/Compatibility.model");
const Notification = require("../models/Notification.model");
const mongoose = require("mongoose");
const { requestDailyHoroscope } = require("../services/base.service");
const { astralCalc } = require("./helpers/signsHelper");

module.exports.explore = (req, res, next) => {
  const { search } = req.query;

  if (search) {
    criteria = new RegExp(search, "i");
  }

  User.find(
    search
      ? {
          $or: [{ firstName: criteria }, { lastName: criteria }],
          email: { $ne: req.user.email },
        }
      : { email: { $ne: req.user.email } }
  )
    .sort({ firstName: 1, lastName: 1 })
    .populate("sunSign moonSign ascendantSign")
    .then((users) => {
      res.render("user/explore", { users });
    })
    .catch(next);
};

module.exports.timeline = (req, res, next) => {
  Post.find()
    .populate("user")
    .then((posts) => {
      res.render("user/timeline", { posts });
    })
    .catch((err) => next(err));
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
    .then((user) => {
      return Compatibility.findOne({
        signs: { $all: [user.sunSign, req.user.sunSign._id] },
      }).then((compatibility) => {
        res.render("user/otherProfile", { user, compatibility });
      });
    })
    .catch(next);
};

module.exports.notifications = (req, res, next) => {
  Notification.find({ user: req.user.id })
    .then((notifications) => {
      res.render("user/notifications", { notifications });
    })
    .catch(next);
};

module.exports.settings = (req, res, next) => {
  res.render("user/settings");
};

module.exports.editProfile = (req, res, next) => {
  res.render("user/edit");
};

module.exports.doEditProfile = async (req, res, next) => {
  const renderWithErrors = (errors) => {
    const userData = { ...req.body };
    res.render("user/edit", {
      user: userData,
      errors,
    });
  };

  const { email, timeOfBirth, dayOfBirth, monthOfBirth, yearOfBirth } =
    req.body;

  const signs = await astralCalc(
    timeOfBirth,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth
  );

  User.findOne({ email: { $ne: req.user.email } })
    .then(async (user) => {
      if (user) {
        renderWithErrors({ email: "Email already in use" });
      } else {
        const signs = await astralCalc(
          timeOfBirth,
          dayOfBirth,
          monthOfBirth,
          yearOfBirth
        );

        const userBody = {
          ...req.body,
          ...signs.ids,
        };

        if (req.file) {
          userBody.image = req.file.path;
        } else {
          userBody.image = `/images/signs/${signs.names.sunSign}.png`;
        }

        return User.findByIdAndUpdate(req.user.id, userBody, {
          new: true,
          runValidators: true,
        }).then((userUpdated) => {
          res.redirect("/profile");
        });
      }
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        renderWithErrors(err.errors);
      } else {
        next(err);
      }
    });
};
