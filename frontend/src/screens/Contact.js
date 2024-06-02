import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h1>Contact Us</h1>
          <p>
            If you have any questions, concerns, or feedback, please feel free
            to reach out to us. We're here to help!
          </p>
          <h3>Our Contact Information</h3>
          <p>Email: support@thetechcorner.com</p>
          <p>Phone: +91 6294504157</p>
          <p>Address: 123 Tech Street, Tech City, TC 12345</p>
          <h3>Follow Us</h3>
          <p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-facebook-f"
                style={{ marginRight: "10px" }}
              ></i>
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-twitter"
                style={{ marginRight: "10px" }}
              ></i>
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-instagram"
                style={{ marginRight: "10px" }}
              ></i>
              Instagram
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
