const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// ToDo.remove({}).then((result) =>{
//   console.log(result);
// });

// ToDo.findOneAndRemove({
//   _id:"5c4ad59cbfafa92ba4eb0254"
// }).then((result) =>{
//   console.log(result);
// });

ToDo.findByIdAndRemove("5c4ad59cbfafa92ba4eb0255").then((result) =>{
  console.log(result);
});
