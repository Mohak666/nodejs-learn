const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve,reject) => {

    var encodedAddress = encodeURIComponent(address);
    var requestURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=ciZURLPwb13FU5Hp4FI8U4HNPsl79PGV&location='+encodedAddress;
    request({
      url: requestURL,
      json: true,
    }, (error,response,body) => {

        if(error){
          reject('unable to connect');
        }
        else if(!body || !body.info){
          reject('unable to find address');
        }
        else if(body.info.statuscode === 0){
          resolve(  {
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng,
            address: body.results[0].locations[0].adminArea5 +', '+ body.results[0].locations[0].adminArea3 +' '+ body.results[0].locations[0].postalCode +', '+ body.results[0].locations[0].adminArea1,
          });
        }
      });

  });

};

geocodeAddress('-------').then((location) => {
  console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
  console.log(errorMessage);
});
