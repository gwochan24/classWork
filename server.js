const express = require('express');
const dotenv = require('dotenv');

// Route files
const topics = require('./routes/topics');

// Load in env
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/', topics);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
