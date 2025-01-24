const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sachin",
    lastName: "Kamble",
    emailId: "sachin@gmail.com",
    password: "sachin@123",
  };

  //creating new instance of user model
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User added successfully ");
  } catch (err) {
    res.status(400).send("Error saving the use" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection successfull");
    app.listen(7777, () => {
      console.log("Server is successfully running on port 7777");
    });
  })
  .catch((err) => console.log("Database cannot be connected"));
