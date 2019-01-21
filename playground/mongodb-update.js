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

//     db.db().collection("ToDos").findOneAndUpdate(
//       {
//         text:'Something to do'
//       },
//       {
//         $set :{
//           text:'Nothing to do'
//         }
//       },null)
// .then((result) => {
//   console.log(result);
// }, (err) => {
//   console.log("Unable to update");
// })

db.db().collection("User").findOneAndUpdate(
  {
    name: "Johnny"
  },
  {
    $set: {
      name:"Gat"
    },
    $inc: {
      age: 1
    }
  },null)
.then((result) => {
console.log(result);
}, (err) => {
console.log("Unable to update");
})

  db.close();
});
