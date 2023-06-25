import express from "express";
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.route("/").post(registerUser).get(protect, admin, getUsers);
Router.post("/login", authUser);
Router.route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
Router.route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default Router;
