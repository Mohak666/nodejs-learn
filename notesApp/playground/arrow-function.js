var square = (x) => x*x;
console.log(square(9));

var user = {
  name: 'Mohak',
  sayHi: () => {
    console.log(`Hi, ${this.name}`);//no this binding in arrow functions
    console.log(arguments);//arrow functions cannot access arguments array passed to the function,they refer to the global argument array
  },
  sayHiAlt () {
    console.log(`Hi, ${this.name}`)
    console.log(arguments);
  }
};

user.sayHi(1,2,3);
