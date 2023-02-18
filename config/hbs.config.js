const hbs = require('hbs');
const path = require('path');

hbs.registerPartials(path.join(__dirname, '../views/partials'));

hbs.registerHelper("isFollow", function (options){
    const { userFollower, userFollowed } = options.hash;
    if (userFollower.followeds.some(follow => follow.followed._id.toString() === userFollowed._id.toString())) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
})