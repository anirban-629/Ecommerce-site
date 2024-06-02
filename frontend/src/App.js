import React from "react";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  OrderListScreen,
  OrderScreen,
  PaymentScreen,
  PlaceOrderScreen,
  ProductEditScreen,
  ProductListScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen,
  UserEditScreen,
  UserListScreen,
} from "./screens";
import About from "./screens/About";
import Contact from "./screens/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-4">
          <Container>
            <Routes>
              <Route path="/about" Component={About} exact />
              <Route path="/contact" Component={Contact} exact />
              <Route path="/order/:id" Component={OrderScreen} exact />
              <Route path="/shipping" Component={ShippingScreen} exact />
              <Route path="/payment" Component={PaymentScreen} exact />
              <Route path="/placeorder" Component={PlaceOrderScreen} exact />
              <Route path="/login" Component={LoginScreen} exact />
              <Route path="/register" Component={RegisterScreen} exact />
              <Route path="/profile" Component={ProfileScreen} exact />
              <Route path="/product/:id" Component={ProductScreen} exact />
              <Route path="/cart/:id?" Component={CartScreen} exact />
              <Route path="/admin/userlist" Component={UserListScreen} exact />
              <Route
                path="/admin/user/:id/edit"
                Component={UserEditScreen}
                exact
              />
              <Route
                path="/admin/productlist"
                Component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/productlist/:pageNumber"
                Component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/product/:id/edit"
                Component={ProductEditScreen}
                exact
              />
              <Route
                path="/admin/orderlist"
                Component={OrderListScreen}
                exact
              />
              <Route path="/search/:keyword" Component={HomeScreen} exact />
              <Route path="/page/:pageNumber" Component={HomeScreen} exact />
              <Route
                path="/search/:keyword/page/:pageNumber"
                Component={HomeScreen}
                exact
              />
              <Route path="/" Component={HomeScreen} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
