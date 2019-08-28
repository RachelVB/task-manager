
// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
// Always use full localhost name and not 'localhost'.
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database' + error);
  }
  
  const db = client.db(databaseName);

  db.collection('users').insertOne({
    name: 'Rachel',
    age: 26
  })
});