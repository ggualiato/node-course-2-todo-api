const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<giomongodb>:<giomongodb>@ds117956.mlab.com:17956/mongodb-todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
