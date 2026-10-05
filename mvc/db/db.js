const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mvc';

async function connection() {
    console.log("Connected successfully!");
    const db = client.db(dbName);
    const collection = db.collection('posts');
}

connection()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

/*const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mvc';

MongoClient.connect(url, function(error, db) {
    if (error) throw error;

    console.log("Database created successfully!");
    db.close();
});*/