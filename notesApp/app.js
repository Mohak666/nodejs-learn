console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var result = notes.add(9,10);
console.log(result);
// var user = os.userInfo();
// fs.appendFileSync('greetings.txt',`Hello ${user.username} !, You are ${notes.age} `);
