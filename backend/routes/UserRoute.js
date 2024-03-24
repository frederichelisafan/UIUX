import express from "express";
import {
  getUsers,
  createUser,
  userLogin,
} from "../controller/UserController.js";

const router = express.Router();

// router.get("/users", getUsers);
router.post("/register", createUser);
router.post("/login", userLogin);

export default router;
