// var obj = {
//   name: "M",
//   age: 21,
// };
//
// console.log('The given object is :');
// console.log(obj);
//
// var stringObj = JSON.stringify(obj);
// console.log("\nThe string version of the object is :");
// console.log(stringObj);
//
// var person = JSON.parse(stringObj);
// console.log("\nThe object version of above string is:");
// console.log(person);

const fs = require('fs');

var noteObject = {
  title: 'Some title',
  body: 'The body',
};

var noteString = JSON.stringify(noteObject);
fs.writeFileSync('notes.json',noteString);

var readNoteString = fs.readFileSync('notes.json');
var readNoteObect = JSON.parse(readNoteString);
console.log("Title: ",readNoteObect.title, "\nBody: ",readNoteObect.body);
