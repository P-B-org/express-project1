const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: [EMAIL_PATTERN, "Please, insert a valid email address"],
      required: [true, "Please, insert an email address"],
      unique: [true, "Email already in use"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        PASSWORD_PATTERN,
        "Your password must have a minimum of 8 characters, at least one letter and one number",
      ],
    },
    firstName: {
      type: String,
      required: [true, "Please, insert your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please, insert your last name"],
    },
    dayOfBirth: {
      type: Number,
      required: true,
    },
    monthOfBirth: {
      type: Number,
      required: true,
    },
    yearOfBirth: {
      type: Number,
      required: true,
    },
    timeOfBirth: {
      type: String,
      required: true,
    },
    sunSign: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    moonSign: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    ascendantSign: {
      type: mongoose.Types.ObjectId,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const rawPassword = this.password;
  if (this.isModified("password")) {
    bcrypt
      .hash(rawPassword, SALT_ROUNDS)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch((err) => next(err));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (passwordToCompare) {
  return bcrypt.compare(passwordToCompare, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
