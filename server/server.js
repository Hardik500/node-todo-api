const express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose')
var {ToDo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new ToDo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req,res) => {
  ToDo.find().then((todos) => {
    res.send({todos})
  }, (err) => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  };

  ToDo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
})

module.exports = {app};
