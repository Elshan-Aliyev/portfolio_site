// backend/config/db.js
/*
  File: db.js
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-23
  Description: MongoDB connection using Mongoose
*/

const mongoose = require("mongoose");

const connectDB = async (mongoUri) => {
  try {
    const conn = await mongoose.connect(mongoUri, {
      // options are handled by mongoose defaults in v7+
    });
    console.log(`MongoDB Connected: ${conn.connection.name} - ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
