const request = require('request');


var geocodeAddress = (address, callback ) => {
  // ######### my own logic to encode URL, this totally works ######
  // var address = argv.a.split(' ').join('%20');
  // var requestURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=ciZURLPwb13FU5Hp4FI8U4HNPsl79PGV&location='+address;
  var encodedAddress = encodeURIComponent(address);
  var requestURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=ciZURLPwb13FU5Hp4FI8U4HNPsl79PGV&location='+encodedAddress;
  request({
    url: requestURL,
    json: true,
  }, (error,response,body) => {

      if(error){
        callback('unable to connect');
      }
      else if(!body){
        callback('unable to find address');
      }
      else if(body.info.statuscode === 0){
        callback( undefined, {
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng,
          address: body.results[0].locations[0].adminArea5 +', '+ body.results[0].locations[0].adminArea3 +' '+ body.results[0].locations[0].postalCode +', '+ body.results[0].locations[0].adminArea1,
        });
      }
    });
}
module.exports = {
  geocodeAddress,
};
