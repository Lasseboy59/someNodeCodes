const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c6058bf0dd3fadf343839b0';
var userId = '5c5efa39d09c7c66177cfc92';

if(!ObjectID.isValid(id)) {
    console.log('ID is not valid')
}


Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found!')
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Id not found!')
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));