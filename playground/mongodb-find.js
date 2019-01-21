// const MongoClient = require("mongodb").MongoClient;
                // OR
const {MongoClient,ObjectID} = require("mongodb");

// var id = new ObjectID; // Get _id using object destructuring
//
// console.log(id);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true} , (err,db) => {
  if (err) {
    return console.log("Unable to connect to the MongoDb Server");
  }
  console.log("Connected to MongoDb server");

  // db.db().collection('ToDos').find({_id : new ObjectID("5c45d59693781e513d13a5c9")}).toArray().then((docs) => {
  //   console.log('Todos:', JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log("Unable to fetch");
  // });

  // db.db().collection('ToDos').count().then((count) => {
  //   console.log("ToDos count:",count);
  // }, (err) => {
  //   console.log("Unable to fetch");
  // });

  db.db().collection('User').find({name:"Johnny"}).toArray().then((name) => {
    console.log(JSON.stringify(name,undefined,2));
  }, (err) => {
    return console.log("Unable to fetch the name provided")
  });

  db.close();
});
