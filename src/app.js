const express = require("express");

const app = express();

app.get("/user/:id", (req, res) => {
  //get data from server
  console.log(req?.params);
  res.send({ firstName: "Sachin", age: 20 });
});

app.post("/user", async (req, res) => {
  res.send("Data save successfully");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted successfully");
});

app.use(
  "/test",
  (req, res, next) => {
    // res.send("Hello from server1");
    next();
  },
  (req, res) => {
    res.send("Hello from server2");
  }
);

app.use("/getUserData", (req, res) => {
  // throw new Error("abcdds");
  // res.status(500).send("Internal server error");
});

app.use("/", (req, res) => {
  console.log("this is running");
  // if (err) {
  //   res.status(500).send("Internal server error");
  // }
  res.send("Home");
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777");
});
