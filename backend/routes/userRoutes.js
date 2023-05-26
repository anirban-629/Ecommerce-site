import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.route("/").post(registerUser);
Router.post("/login", authUser);
Router.route("/profile").get(protect, getUserProfile);

// ! for adding user manually
// Router.post("/user", async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });
//   user.save();
//   res.send({ name: user.name, email: user.email });
// });

export default Router;
