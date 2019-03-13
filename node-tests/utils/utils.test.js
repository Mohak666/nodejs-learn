// mocha is based on behaviour driven development (BDD), the it() adds to it
const utils = require('./utils');
it('should add two numbers and return the sum', () => {
  var res = utils.add(5,10);
  if(res !== 15){
    throw new Error(`Expected 15, but received ${res}`);
  }
});

it('should  square a number and return the result', () => {
  var res = utils.square(5);
  if(res !== 25){
    throw new Error(`Expected 25, but received ${res}`);
  }
});
