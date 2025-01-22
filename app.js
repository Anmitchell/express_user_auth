const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse incoming requests with URL-encoded payloads (like form submissions).

// Connect application to database
connectDB();

// Use authentication routes
app.use("/api/auth", authRoutes);

module.exports = app;
