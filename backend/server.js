const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

dotenv.config();
const app = express();
app.use(express.json());

connectDB().then((client) => {
  const db = client.db('agri-app');
  const users = db.collection('users');

  app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = { email, password }; 
    await users.insertOne(newUser);
    res.status(201).json({ message: 'User registered successfully' });
  });

  app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
  });
});
