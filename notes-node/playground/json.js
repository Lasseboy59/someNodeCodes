// var obj = {
//     name: 'Lasse'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Lasse", "age": 45}';
// var person = JSON.parse(personString);
// console.log(typeof person)
// console.log(person)

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// originalNotesString
var originalNotesString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNotesString);


var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title + ', ' + note.body)