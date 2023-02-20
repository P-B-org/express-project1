const User = require("../models/User.model");
const Compatibility = require("../models/Compatibility.model");
const Notification = require("../models/Notification.model")
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
        return Compatibility.findOne({signs: {$all: [user.sunSign, req.user.sunSign._id]} })
        .then((compatibility) => {
          res.render("user/otherProfile", { user, compatibility })
        })
    })
    .catch(next);
}

module.exports.notifications = (req, res, next) => {
  Notification.find( {user: req.user.id} )
  .then(notifications => {
    res.render("user/notifications", { notifications })
  })
  .catch(next);
}


// Compatibility.find({signs: {$all: [req.user.params, req.user.id]} })

