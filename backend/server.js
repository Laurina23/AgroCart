const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

let db;

connectDB().then(client => {
  db = client.db('agriDB'); 
  console.log("MongoDB client ready");

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(console.error);

app.post('/api/users', async (req, res) => {
  try {
    const userData = req.body;
    const result = await db.collection('users').insertOne(userData);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
