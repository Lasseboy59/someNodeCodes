const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/bd3e18a5f158e3864a6f0ee6387b97d9/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to forecast.io server')
        } else if (response.statusCode === 400){
            callback('Unbale to fetch weather');
        } else if(response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    });
};

module.exports = {
    getWeather
};