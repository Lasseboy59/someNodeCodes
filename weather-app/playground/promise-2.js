const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        let encodedAddress = encodeURIComponent(address);
        console.log(encodedAddress)

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyClzADoCo8cRCYVc_VYOONVrprC5WCQ0aE`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to google servers!') 
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address.')
            } else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    lattitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });

};

geocodeAddress('vantaa').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
})