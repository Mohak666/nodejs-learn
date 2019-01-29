var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'x',
  };
  setTimeout(() => {
    callback(user);
  },3000);

};
getUser(69, (userObject) => {
  console.log(userObject);
});
