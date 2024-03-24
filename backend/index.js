import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://test12345:test12345@testing123.rk81ryi.mongodb.net/?retryWrites=true&w=majority"
// );
mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
