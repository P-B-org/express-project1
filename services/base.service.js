const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    params: { sign: 'aquarius', day: 'today' },
    headers: {
        'X-RapidAPI-Key': '33f3894c11mshde3475de88aca4ep14fb95jsn6272f6bad256',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
};

module.exports.requestDailyHoroscope = (sign) => {
    options.params.sign = sign.toLowerCase();
    return axios.request(options)
}

