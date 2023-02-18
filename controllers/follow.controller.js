const Follow = require("../models/Follow.model");
const Notification = require("../models/Notification.model");

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
            Notification.create({ user: followed, message: `${req.user.firstName} followed you`, read: false })
            .then((notification) => {
                res.status(201).json({ ok: true });
            }) 
          });
        }
      })
      .catch(next);
  };