const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5c4ab8328f01fa3d34d33b1111";

// if(!ObjectID.isValid(id)){
//   return console.log('ID is not valid');
// }
//
// ToDo.find({
//   _id:id
// }).then((done) => {
//   console.log(done);
// });
//
// ToDo.findOne({
//   _id:id
// }).then((done) => {
//   console.log(done);
// });
//
// ToDo.findById(id).then((done) => {
//   if(!done) {
//     return console.log("Unable to find the ID");
//   }
//   console.log(done);
// }).catch((e) => console.log("nothing"));


User.findById("5c4756d839416e32c8650dc9").then((done) => {
  if(!done) {
    return console.log("Unable to find user with that id");
  }
  console.log(JSON.stringify(done,undefined,2));
}, (e) => {
  console.log(e);
})
