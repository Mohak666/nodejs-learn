const request = require('request');
const yargs = require('yargs');
const fs = require('fs');
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

console.log(argv);
console.log(argv.a);
// ######### my own logic to encode URL, this totally works ######
// var address = argv.a.split(' ').join('%20');
// var requestURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=ciZURLPwb13FU5Hp4FI8U4HNPsl79PGV&location='+address;
var encodedAddress = encodeURIComponent(argv.a);
var requestURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=ciZURLPwb13FU5Hp4FI8U4HNPsl79PGV&location='+encodedAddress;

request({
  url: requestURL,
  json: true,
}, (error,response,body) => {
    // fs.writeFileSync('abc.json',JSON.stringify(response));

    if(error){
      console.log('unable to connect');
    }
    else if(!body){
      console.log('unable to find address');
    }
    else if(body.info.statuscode === 0){
      console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
      console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
    }
  });
