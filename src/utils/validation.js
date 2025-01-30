const validatior = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid!");
  } else if (!validatior.isEmail(emailId)) {
    throw new Error("Email is not valid!");
  } else if (!validatior.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

module.exports = {
  validateSignUpData,
};
