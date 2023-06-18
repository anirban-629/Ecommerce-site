import React from "react";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  OrderScreen,
  PaymentScreen,
  PlaceOrderScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen,
} from "./screens";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-4">
          <Container>
            <Routes>
              <Route path="/" Component={HomeScreen} exact />
              <Route path="/product/:id" Component={ProductScreen} exact />
              <Route path="/cart/:id?" Component={CartScreen} exact />
              <Route path="/login" Component={LoginScreen} exact />
              <Route path="/register" Component={RegisterScreen} exact />
              <Route path="/profile" Component={ProfileScreen} exact />
              <Route path="/shipping" Component={ShippingScreen} exact />
              <Route path="/payment" Component={PaymentScreen} exact />
              <Route path="/placeorder" Component={PlaceOrderScreen} exact />
              <Route path="/order/:id" Component={OrderScreen} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
