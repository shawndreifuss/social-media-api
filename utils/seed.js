// Imports
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");
// Seed data
const users = [
  {
    username: "Shawn",
    email: "Shawn@gmail.com",
    thought: [],
  },
  {
    username: "Lernantino",
    email: "Lernantino@gmail.com",
    thought: [],
  },
  {
    username: "Larry",
    email: "Larry@gmail.com",
    thought: [],
  },
  {
    username: "Greg",
    email: "Greg@gmail.com",
    thought: [],
  },
  {
    username: "Brandon",
    email: "Brandon@gmail.com",
    thought: [],
  },
];


// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing students
  await User.deleteMany({});

  // Adds seed data to database
  await User.collection.insertMany(users);

  process.exit(0);
});