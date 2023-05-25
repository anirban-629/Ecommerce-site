import express from "express";
import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

const Router = express.Router();

// @desc    FETCH ALL PRODUCT
// @route   GET /api/products
// @access  PUBLIC
Router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // res.status(401);
    // throw new Error("Not Authorized");
    res.json(products);
  })
);

// @desc    FETCH SINGLE PRODUCT
// @route   GET /api/products/:id
// @access  PUBLIC
Router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default Router;
