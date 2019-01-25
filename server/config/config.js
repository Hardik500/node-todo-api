var env = process.env.NODE_ENV || 'development'; //process.env.NODE_ENV: Only set on Heroku not locally

console.log("***env***:",env);

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDo';
}
else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoTest';
}
