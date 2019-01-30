const request = require('request');

var getWeather = (lat,lng, callback) => {
  var requestURL =
  request({
    url: 'https://api.darksky.net/forecast/7975ab8100ed76ec2e4c11648d0fad56/'+lat+','+lng,
    json: true,
  }, (error,response,body) => {
      if(!error && response.statusCode === 200){
        callback(undefined,{
          temperture: body.currently.temperature,
          apparentTemperture: body.currently.apparentTemperature,
        });
      }
      else {
        callback('unable to fetch weather');
      }
     }
    );
};

module.exports= {
  getWeather
};
