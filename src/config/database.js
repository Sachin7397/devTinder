const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sachin:Abcd1234@mern.6dn4vyt.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
