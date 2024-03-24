// import { response } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  User.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success akses");
      } else {
        res.status(401).json({ message: "email atau password" });
      }

      //   else {
      //     res.status(401).json({ message: "email atau password" });
      //   }
      // else {
      //   res.json("no record existed");
      // }
    }
  });
};
