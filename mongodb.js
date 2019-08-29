// CRUD create read update delete

/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID; 

Below is the short-hand version of whats written above. */
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
// Always use full localhost name and not 'localhost'.
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database' + error);
  }
  
  const db = client.db(databaseName);

  /* db.collection('users').insertOne({
    name: 'Rachel',
    age: 26
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user');
    } 

    console.log(result.ops);

  })  */

  /* db.collection('tasks').insertMany([
    {
      description: 'Empty Dishwasher', 
      completed: false
  },
  {
    description: 'Load Dishwasher', 
      completed: false
  },
  {
    description: 'Sweep Floors', 
      completed: true
  }
], (error, result) => {
  if (error) {
    return console.log('The following error has occured!' + error);
  }
  console.log(result.ops);
}); */

  
  
  /* db.collection('users').insertMany([
    {
      name: 'Jen',
      age: 28
    },
    {
      name: 'Gunther',
      age: 27
    }
  ], (error, result) => {
    if (error) {
      return console.log('This is an error!');
    }
    console.log(result.ops);
  }) */


});