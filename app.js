/*
  File: app.js
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-23
  Description: Express app configuration
*/

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON body

// simple root message for screenshot requirement
app.get("/", (req, res) => {
  res.send("<h2>Portfolio API Server - COMP229 Assignment 2</h2><p>APIs available at /api/contacts and /api/users</p>");
});

// API routes
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

module.exports = app;
