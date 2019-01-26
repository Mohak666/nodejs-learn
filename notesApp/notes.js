console.log('in notes.js');

module.exports.addNote = () => {
  console.log('adding note');
  return 'new note';
};

module.exports.add = (a,b) => {
  return a+b;
};
