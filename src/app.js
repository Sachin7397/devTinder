const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  //get data from server
  res.send({ firstName: "Sachin", age: 20 });
});

app.post("/user", async (req, res) => {
  res.send("Data save successfully");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted successfully");
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
