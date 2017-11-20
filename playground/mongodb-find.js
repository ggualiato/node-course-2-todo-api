// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a10f6d0d3a82c25b845e945')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection('Users').find({
    name: 'Giovanni Gualiato'
  }).count().then((count) => {
    console.log(`Users ${count}`);
  }, (error) => {
    console.log('Users not find', error);
  });

  // db.close();
});
