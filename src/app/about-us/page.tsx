"use client";

import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center primary-title">About Us</h1>
          <p className="text-center primary-subtitle">
            Back in 2015, at the helm of ebiznext, a boutique data engineering
            company, we faced a daunting challenge...
          </p>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section>
        <Carousel>
          <Carousel.Item>
            <Image
              src="https://via.placeholder.com/1350x400"
              alt="Slide 1"
              className="primary-image"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://via.placeholder.com/1350x400"
              alt="Slide 2"
              className="primary-image"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://via.placeholder.com/1350x400"
              alt="Slide 2"
              className="primary-image"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Image and Text Section */}
      <section>
        <Row className="align-items-center mt-5">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://via.placeholder.com/600x400"
                fluid
                alt="About Us Image"
                className="primary-image"
              />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="secondary-title">Our Mission</h2>
              <p className="secondary-subtitle">
                Our mission is to deliver exceptional data engineering solutions
                that enable organizations to harness the power of big data...
              </p>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Founders Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-5"
        >
          <h2 className="secondary-title">Meet Our Founders</h2>
          <Row className="text-center mt-4">
            <Col md={4}>
              <Image
                src="https://via.placeholder.com/150"
                roundedCircle
                alt="Founder 1"
                className="primary-image"
              />
              <h3 className="mt-3 primary-subtitle">John Doe</h3>
              <p className="primary-body">CEO & Co-Founder</p>
            </Col>
            <Col md={4}>
              <Image
                src="https://via.placeholder.com/150"
                roundedCircle
                alt="Founder 2"
                className="primary-image"
              />
              <h3 className="mt-3 primary-subtitle">Jane Smith</h3>
              <p className="primary-body">CTO & Co-Founder</p>
            </Col>
            <Col md={4}>
              <Image
                src="https://via.placeholder.com/150"
                roundedCircle
                alt="Founder 3"
                className="primary-image"
              />
              <h3 className="mt-3 primary-subtitle">Mike Johnson</h3>
              <p className="primary-body">COO & Co-Founder</p>
            </Col>
          </Row>
        </motion.div>
      </section>

      {/* content  */}
      <section className="mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="secondary-title">Full Profile</h2>
          <p className="secondary-subtitle">
            Our full profile includes a comprehensive overview of our company’s
            achievements, milestones, and future plans. We pride ourselves on
            our commitment to excellence and our drive to continuously innovate
            and adapt in the ever-evolving field of data engineering...
          </p>
        </motion.div>
      </section>

      {/* content */}
      <section className="mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="secondary-title">Very Professional</h2>
          <p className="secondary-subtitle">
            At our company, professionalism is not just a value—it’s a standard.
            Our team consists of seasoned experts who adhere to the highest
            standards of quality and professionalism. We ensure that every
            project we undertake meets the highest level of professionalism and
            exceeds our clients' expectations...
          </p>
        </motion.div>
      </section>
    </Container>
  );
}
