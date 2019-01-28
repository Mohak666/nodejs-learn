console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs:',argv);
console.log("Command:",command);

if( command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note added succesfully');
    notes.logNote(note);
  }
  else{
    console.log('duplicate note cannot be added');
  }
}
else if( command === 'list'){
  notes.getAll();
}
else if( command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log("Note Found ");
    notes.logNote(note);
  }
  else{
    console.log("Note not found");
  }
}
else if( command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed succesfully' : 'Note not found' ;
  console.log(message);
}
else
  console.log('Invalid/No command');
