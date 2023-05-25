// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import colors from "colors";
// import users from "./data/users.js";
// import products from "./data/products.js";
// import User from "./models/user.model.js";
// import Product from "./models/products.model.js";
// import Order from "./models/order.model.js";
// import connectDB from "./config/db.js";
// dotenv.config();
// connectDB();

// const importData = async () => {
//   try {
//     await Order.deleteMany();
//     await Product.deleteMany();
//     await User.deleteMany();

//     const createdUsers = await User.insertMany(users);
//     const adminUser = createdUsers[0]._id;

//     const sampleProducts = products.map((product) => {
//       return { ...product, user: adminUser };
//     });

//     await Product.insertMany(sampleProducts);
//     console.log("DATA IMPORTED : ".green.inverse);
//     process.exit(1);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };
// const destroyData = async () => {
//   try {
//     await Order.deleteMany();
//     await Product.deleteMany();
//     await User.deleteMany();

//     console.log("DATA DELETED : ".green.inverse);
//     process.exit();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// // ! That means if the inputs in console like "node backend/seeder -d " here in position 2 is -d the it'll destroy the data otherwise it will import
// if (process.argv[2] === "-d") {
//   destroyData();
// } else {
//   importData();
// }

// console.log(process.argv[2]);

// ! -----------------------
import Product from "./models/product.model.js";
import User from "./models/user.model.js";
import products from "./data/products.js";
import users from "./data/users.js";

const seeder = async () => {
  const createdUsers = await User.insertMany(users);
  const adminUser = createdUsers[0]._id;
  console.log(adminUser);
  const sampleProducts = products.map((product) => {
    return { ...product, user: adminUser };
  });
  await Product.insertMany(sampleProducts);
  console.log("PRocess  ended");
};
// ! -----------------------
