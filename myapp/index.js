const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000;

//middleware
app.use(express.json())
app.use(cors())
require('dotenv').config()

//username : rashvitamec22
//pwd : vTIVfVK84Cg94RFy


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rashvitamec22:vTIVfVK84Cg94RFy@job-portal-mern.xzlfahc.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-mern";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})