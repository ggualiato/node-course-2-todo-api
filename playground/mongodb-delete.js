// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name: 'Giovanni Gualiato'}).then((result) => {
    console.log('deleteMany was executed', result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a11eb5cf4d2eb212030f3e8')
  }).then((result) => {
    console.log('findOneAndDelete was executed', result);
  });

  // db.close();
});
