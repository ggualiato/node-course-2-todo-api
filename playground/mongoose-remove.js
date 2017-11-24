const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then((result) => {
//
// });

Todo.findByIdAndRemove('5a17802706f1f2a5ace42d86').then((todo) => {
  console.log(todo);
});
