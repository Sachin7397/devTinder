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

const validateProfileEditData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "about",
    "photoUrl",
    "gender",
    "skills",
    "age",
  ];

  console.log(Object.keys(req.body));

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  console.log("isEditAllowed", isEditAllowed);
  return isEditAllowed;
};

module.exports = {
  validateSignUpData,
  validateProfileEditData,
};
