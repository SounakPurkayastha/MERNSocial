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

app.use(express.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(3000);
