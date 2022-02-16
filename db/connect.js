const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url); // no deprication warning in mongoose v6
};

module.exports = connectDB;
