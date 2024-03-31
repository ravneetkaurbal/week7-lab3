const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getLocations,
  addLocation,
  getLocation,
  updateLocation,
  deleteLocation,
  deleteAllLocations,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Goals
app.get("/locations", getLocations);

// POST a new Goal
app.post("/locations", addLocation);

// GET a single Goal
app.get("/locations/:id", getLocation);

// Update Goal using PUT
app.put("/locations/:id", updateLocation);

// DELETE a Goal
app.delete("/locations/:id", deleteLocation);

// DELETE all Goal
app.delete("/locations", deleteAllLocations);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});