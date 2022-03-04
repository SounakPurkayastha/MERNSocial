const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/project").then(() => {
  console.log("connection successful");
});

//importing routes
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(3000);
