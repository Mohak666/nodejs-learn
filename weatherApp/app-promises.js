const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
            .options({
              a: {
                demand:true,
                alias:'address',
                describe : 'Adress to fetch weather for',
                string : true, // to always parse --a or -address as a string
              }
            })
            .help()
            .alias('help','h')
            .argv;

var encodedAddress = encodeURIComponent(argv.address);

var requestURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=ciZURLPwb13FU5Hp4FI8U4HNPsl79PGV&location='+encodedAddress;
// console.log(requestURL)
axios.get(requestURL).then((response) => {
  // console.log(response.data);
  if(!response.data){
    throw new Error('unable to find address');
  }
  else if(response.data.info.statuscode === 0 && response.data){
    var lat =  response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var address = response.data.results[0].locations[0].adminArea5 +', '+ response.data.results[0].locations[0].adminArea3 +' '+ response.data.results[0].locations[0].postalCode +', '+ response.data.results[0].locations[0].adminArea1
    weatherURL =  'https://api.darksky.net/forecast/7975ab8100ed76ec2e4c11648d0fad56/'+lat+','+lng;
    // console.log(weatherURL);
    console.log(lat,lng,address);
    return axios.get(weatherURL);
 }
  else {
    throw new Error('unable to find address');
  }

}).then((response) => {// runs after successful return from weatherURL
  temperture = response.data.currently.temperature;
  apparentTemperture = response.data.currently.apparentTemperature;
  console.log(`The temperature is ${temperture}, and it feels like ${apparentTemperture} `);
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('unable to connect to API servers');
  }
  else if(e.message){
        // console.log('here')
        console.log(e.message);
  }

});
