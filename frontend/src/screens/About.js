import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h1>About Us</h1>
          <p>
            Welcome to The Tech Corner, your go-to destination for all things
            tech! Founded with a passion for technology and innovation, our
            mission is to provide top-quality tech products and exceptional
            customer service.
          </p>
          <p>
            At The Tech Corner, we offer a wide range of gadgets, accessories,
            and the latest in technology to meet all your needs. Our team is
            dedicated to sourcing the best products from around the globe,
            ensuring that our customers have access to the latest and greatest
            in tech.
          </p>
          <p>
            We pride ourselves on our user-friendly website, making it easy for
            you to find and purchase the products you love. Our secure payment
            options and efficient order processing ensure a smooth shopping
            experience from start to finish.
          </p>
          <p>
            We believe in building a community of tech enthusiasts and providing
            support every step of the way. Whether you're a tech novice or a
            seasoned expert, The Tech Corner is here to help you navigate the
            ever-evolving world of technology.
          </p>
          <p>
            Thank you for choosing The Tech Corner. We look forward to serving
            you and becoming your trusted source for all your tech needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
