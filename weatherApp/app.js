const yargs = require('yargs');

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


var address = geocode.geocodeAddress( argv.a, (errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }
  else {
    console.log(results.address);
    // console.log(results.latitude,results.longitude);
    weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(`The temperature is ${weatherResults.temperture}, and it feels like ${weatherResults.apparentTemperture} `);
      }
    });
  }
});
