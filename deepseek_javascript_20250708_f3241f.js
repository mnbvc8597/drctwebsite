const { MongoClient } = require('mongodb');

// Replace the following with your Atlas connection string
const uri = "mongodb+srv://mnbvc8597:<db_password>@cluster0.nxdqgfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);