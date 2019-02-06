
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

let encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyClzADoCo8cRCYVc_VYOONVrprC5WCQ0aE`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }

    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;

    let weatherUrl = `https://api.darksky.net/forecast/bd3e18a5f158e3864a6f0ee6387b97d9/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = ((response.data.currently.temperature - 32)/1.8).toFixed(2);
    var apparentTemperature = ((response.data.currently.apparentTemperature - 32)/1.8).toFixed(2);
    console.log(`It's currently ${temperature}, it feels like ${apparentTemperature}`)
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
})