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

  // db.db().collection('ToDos').insertOne({
  //   text: "Something to do",
  //   completed: false
  //   }, (err,result) => {
  //   if(err){
  //     return console.log("Unable to insert todo", err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.db().collection('User').insertOne({
  //   name:"Johnny",
  //   age: 19
  // }, (err,result) => {
  //   if(err) return console.log("Unable to add to User",err);
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

  db.close();
});
