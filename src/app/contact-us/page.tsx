"use client";

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <Container style={{ maxWidth: "1350px" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Row className="text-center mb-5">
          <Col>
            <h1 className="primary-title">Contact Us</h1>
            <p className="primary-subtitle">We'd love to hear from you!</p>
          </Col>
        </Row>
      </motion.div>

      <Row>
        <Col md={6} className="mb-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="secondary-title text-start">Contact Information</h2>
            <p className="secondary-subtitle text-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Street Name, City,
              State, 56789
            </p>
            <p className="secondary-subtitle text-start">
              <FontAwesomeIcon icon={faPhone} /> +1 234 567 8900
            </p>
            <p className="secondary-subtitle text-start">
              <FontAwesomeIcon icon={faEnvelope} /> info@example.com
            </p>
          </motion.div>
        </Col>

        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="secondary-title text-start">Send Us a Message</h2>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
