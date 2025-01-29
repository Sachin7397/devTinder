const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());
app.post("/signup", async (req, res) => {
  console.log(req.body);
  // creating new instance of user model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully ");
  } catch (err) {
    res.status(400).send("Error saving the use" + err.message);
  }
});

app.get("/user", async (req, res) => {
  console.log(req.body.emailId);
  try {
    const user = await User.find({ emailId: req.body.emailId });
    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//Get feed data api
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted Succesfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
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
