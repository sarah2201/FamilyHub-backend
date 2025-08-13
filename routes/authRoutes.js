import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
import { handleImageUpload, upload } from "./imageUpload.js";

const authRoutes = express.Router();

authRoutes
  .post("/register", upload.single("image"), handleImageUpload, registerUser)
  .post("/login", loginUser)
  .post("/logout", logoutUser);

export default authRoutes;
