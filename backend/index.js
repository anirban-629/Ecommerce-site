import express from "express";
import dotenv from "dotenv";
import "colors";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);  
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .bgMagenta.bold
  )
);
