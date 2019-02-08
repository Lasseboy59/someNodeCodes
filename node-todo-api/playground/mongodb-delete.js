// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp2', (err, db) => {
    if(err){
        return console.log('Unable to log to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res)
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res)
    // });

    // // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res)
    // });

    // // deleteMany
    // db.collection('Users').deleteMany({name: 'Andrew'}).then((res) => {
    //     console.log(res)
    // });

    // deleteOne
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectId("5c5c515372b4b85f5fec7e75")
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // });


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c5c4e3b2ed4345e0030d7fb")
      }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });

    // db.close();





});