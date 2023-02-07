const mongoose = require ("mongoose");
const bcrypt = require ("bcrypt");

const SALT_ROUNDS = 10;
const EMAIL_PATTERN =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new mongoose.Schema (
    {
        username: {
            type: String, 
            required: [ true , "Please insert an User Name "], 
            unique: [ true, "This User Name is already in use"],
        }, 
        firstName : {
            type: String,
            required: [true, "Please insert your first name"],
        },
        lastName : {
            type: String,
            required: [true, "Please insert your last name"],
        }, 
        dateOfBirth : {
            type: Number,
            required: true,
        },
        timeOfBirth: {
            type: Number,
            required: true,

        }, 
        email: {
            type: String,
            match: EMAIL_PATTERN,
            required: [ true,"Please insert an email address" ], 
            unique: [true, "Email is already in use"],
        }, 
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Your password must have at least 8 characters"]
          },

    },
    {
        timestamps: true,
      }
); 

userSchema.pre("save", function(next){
    const rawPassword = this.password;
    if (this.isModified('password')) {
        bcrypt.hash(rawPassword, SALT_ROUNDS)
          .then(hash => {
            this.password = hash;
            next()
          })
          .catch(err => next(err))
      } else {
        next();
      }
})

const User = mongoose.model("User", userSchema); 
module.exports = User