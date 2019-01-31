var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(typeof a === 'number'  && typeof b === 'number'){
        resolve(a+b);
      }
      else{
        reject('Arguments must be numbers');
      }
    },1500);
  });
};

asyncAdd(5,7).then((res) => {
  console.log('Result: ',res);
  return asyncAdd(res,10);
}).then((res) => {
  console.log('Result: ',res);
}).catch((errorMessage)=>{
  console.log(errorMessage);
});
// var somePromise = new Promise((resolve,reject) => {
//   setTimeout(() =>{
//     // resolve("It's Working");
//     reject('unable to fulfill promise');
//   },2000);
// });
//
// somePromise.then( (message) => {
//   console.log('Success:',message);
// }, (errorMessage) => {
//   console.log("Failed:",errorMessage);
// });
