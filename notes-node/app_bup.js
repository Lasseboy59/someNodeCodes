console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo()

var result = notes.addNote();
// console.log(_.isString(true))
// console.log(_.isString('Lauri'))
var filteredArray = _.uniq(['Lasse', 'Lasse', 1, 2, 3])
console.log(filteredArray)

// console.log('Result:  ' + notes.add(2,5));

// console.log(user)
// fs.appendFileSync('greetings.txt', `Hello ${user.username} ! You are ${notes.age}`)  // ver. a
fs.appendFileSync('greetings.txt','Hello You!')


// ver. b
// fs.appendFile('greetings.txt', 'Hello world!', function(err){  
//     if(err){
//         console.log('Unable to append');
//     }
// });