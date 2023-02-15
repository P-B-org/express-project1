const User = require("../models/User.model");
const { requestDailyHoroscope } = require("../services/base.service");

module.exports.profile = (req, res, next) => {
    requestDailyHoroscope(req.user.sunSign.name.toLowerCase())
        .then(function (response) {
            res.render("user/profile", {dailyHoroscope: response.data})
        })
        .catch(function (error) {
            console.error(error);
        });
    } 



