require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose')
var {ToDo} = require('./models/todo')
var {User} = require('./models/user')

const port = process.env.PORT;

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

app.delete('/todos/:id',(req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send()
  }

  ToDo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      res.status(404).send();
    }
    res.status(200).send({todo})
  }).catch((e) => {
    res.status(400).send()
  });
});

app.patch('/todos/:id',(req,res) => {
  id = req.params.id;
  body = _.pick(req.body, ['text', 'completed']); //The user can modify only these properties

  if(!ObjectID.isValid(id)){
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed ){
    body.completedAt = new Date().getTime();
  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  ToDo.findByIdAndUpdate(id, {$set: body}, {new: true} ).then((todo) => { //{new:true} Similar to returnOriginal but for mongoose
    if(!todo){
      return res.status(404).send()
    }
    res.status(200).send({todo});
  }, (e) => {
    return res.status(400).send();
  })
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
