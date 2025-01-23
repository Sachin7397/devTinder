const express = require("express");

const app = express();

app.use("/sachin", (req, res) => {
  res.send("Hi Sachin this side");
});

app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.use("/", (req, res) => {
  res.send("Home");
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 3333");
});
