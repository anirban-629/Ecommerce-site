import express from "express";
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} from "../controllers/productController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.route("/").get(getProducts).post(protect, admin, createProduct);
Router.route("/:id/reviews").post(protect, createProductReview);
Router.get("/top", getTopProducts);
Router.route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default Router;
