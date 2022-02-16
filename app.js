require('dotenv').config();

// express
const express = require('express');
const app = express();

// database
const connectDB = require('./db/connect');

// start server
const port = process.env.PORT || 5000;
(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
})();
