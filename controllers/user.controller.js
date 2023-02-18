const User = require("../models/User.model");
const Follow = require("../models/Follow.model");
const { requestDailyHoroscope } = require("../services/base.service");

module.exports.explore = (req, res, next) => {
  User.find( {email: {$ne: req.user.email} })
    .then((users) => {
      res.render("user/explore", { users });
    })
    .catch(next);
};

module.exports.profile = (req, res, next) => {
  requestDailyHoroscope(req.user.sunSign.name.toLowerCase())
  .then(function (response) {
      res.render("user/profile", { dailyHoroscope: response.data});
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

