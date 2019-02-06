
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.lattitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                let celsius = ((weatherResults.temperature - 32)/1.8).toFixed(2);
                let apparentCelsius = ((weatherResults.apparentTemperature - 32)/1.8).toFixed(2);
                console.log(`Temperature: ${celsius} C, the referring to (actual) ${apparentCelsius} C.`)
            }
        });
    }
});