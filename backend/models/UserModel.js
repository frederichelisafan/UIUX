import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

User.pre("save", async function (next) {
  // if the password has not been modified, then we don't need to hash it again
  // if the password has been modified, then we need to hash it again
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

export default mongoose.model("users", User);
