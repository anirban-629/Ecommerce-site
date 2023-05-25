import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .bgMagenta.bold
  )
);