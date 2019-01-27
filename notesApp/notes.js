const fs = require('fs');

console.log('in notes.js');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');  //read notes already present
    return JSON.parse(notesString);//convert notes from JSON to js object
  }
  catch (e) {
    return [];
  }

};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes)); //write new notes in JSON format
};

var addNote = (title,body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };

  var duplicateNotes = notes.filter((note) => note.title === title);// create a duplicateNotes object,that cinsists of notes with clashing titles
  if(duplicateNotes.length === 0){
    notes.push(note);  //append new note to already existing notes
    saveNotes(notes);
    return note;
  }
  // else{
  //   console.log(`Given note with title: ${title} cannot be added because a note with the same title already exists`)
  // }

};

var getAll = () => {
  var notes =fetchNotes();
};
var getNote = (title) => {
  var notes =fetchNotes();
  var requiredNotes = notes.filter((note) => note.title === title);
  return requiredNotes[0];
};
var removeNote = (title) => {
  console.log('removing note: '+title);
};
var logNote = (note) => {
  console.log("---");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
