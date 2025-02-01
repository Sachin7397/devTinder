const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");

requestRouter.post("/sendconnectionRequest", userAuth, async (req, res) => {
  console.log("Sending connection request");

  res.send(req.user.firstName + " sent a request");
});

module.exports = requestRouter;
