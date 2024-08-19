const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
require('dotenv').config();

//middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal-mern.xzlfahc.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-mern`;

const { ObjectId } = require("mongodb");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
      await client.connect(); // Connect to the MongoDB server
      console.log('Connected to MongoDB');
  } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit the process with a failure code
  }
}

// Ensure this is called before any DB operations
connectDB().then(() => {
  const db = client.db("mernJobPortal");
  const jobsCollections = db.collection("demoJobs");

  // POST a job
  app.post("/post-job", async (req, res) => {
    const body = req.body;
    body.createdAt = new Date();
    const result = await jobsCollections.insertOne(body);
    if (result.insertedId) {
      return res.status(200).send(result);
    } else {
      return res.status(404).send({
        message: "Cannot add this job. Try again",
        status: false
      });
    }
  });

  // GET all jobs
  app.get("/all-jobs", async (req, res) => {
    const jobs = await jobsCollections.find({}).toArray();
    res.send(jobs);
  });

  //get jobs by email
  app.get("/MyJobs/:email",async(req,res)=>{
    const jobs = await jobsCollections.find({postedBy:req.params.email}).toArray();
    res.send(jobs);
  })

  //delete a job
  app.delete("/job/:id", async(req,res)=>{
    const id=req.params.id;
    const filter={_id: new ObjectId(id)};
    const result= await jobsCollections.deleteOne(filter);
    res.send(result); 
  })

  // Send a ping to confirm a successful connection
  client.db("admin").command({ ping: 1 }).then(() => {
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }).catch(console.dir);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
