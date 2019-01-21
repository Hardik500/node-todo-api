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

  //deleteMany

  // db.db().collection('ToDos').deleteMany({text:"Again"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log("Unable to delete");
  // });

  //deleteOne

  // db.db().collection('ToDos').deleteOne({text:"Something not to do"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log("Unable to delete");
  // });

  //findOneAndDelete

  db.db().collection('ToDos').findOneAndDelete({text:"Something not to do"}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log("Unable to delete");
  });

  db.close();
});
