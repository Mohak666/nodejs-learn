console.log('starting app');

setTimeout(() => {
  console.log('inside setTimeout');
}, 2000);

setTimeout(() => {
  console.log('inside second  setTimeout');
}, 0);

console.log('Finishing app');
