import React from "react";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { CartScreen, HomeScreen, ProductScreen } from "./screens";

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
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
