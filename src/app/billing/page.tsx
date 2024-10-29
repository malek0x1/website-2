"use client";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Billing() {
  const cards = [
    {
      title: "Basic",
      price: "$30/month",
      description: "Suitable for individuals.",
      buttonText: "Choose Plan",
    },
    {
      title: "Professional",
      price: "$60/month",
      description: "Perfect for small teams.",
      buttonText: "Choose Plan",
    },
    {
      title: "Enterprise",
      price: "Contact us",
      description: "Best for large organizations.",
      buttonText: "Contact Us",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at Company",
      image: "https://via.placeholder.com/100",
      quote: "Starlake.ai has transformed our data operations!",
    },
    {
      name: "Jane Smith",
      role: "CTO at Startup",
      image: "https://via.placeholder.com/100",
      quote: "The best ETL solution we have ever used.",
    },
    {
      name: "Mike Johnson",
      role: "Data Engineer at Tech Corp",
      image: "https://via.placeholder.com/100",
      quote: "It made data ingestion so much easier.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="mt-5">
      {/* Pricing Section */}
      <section>
        <Row className="text-center">
          <Col>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="primary-title"
            >
              Our Pricing Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="primary-subtitle"
            >
              Choose the plan that suits your needs best.
            </motion.p>
          </Col>
        </Row>
        <Row className="mt-5">
          {cards.map((card, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="mb-4">
                  <Card.Body className="text-center">
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.price}</Card.Text>
                    <Card.Text>{card.description}</Card.Text>
                    <a href="#" className="btn btn-primary">
                      {card.buttonText}
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>
      {/* Testimonials Section */}
      <section>
        <Row className="text-center my-5">
          <Col>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="primary-title"
            >
              Our beloved clients share their Sharp experience
            </motion.h1>
          </Col>
        </Row>
        <Slider {...settings} className="testimonialSlider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <Card className="text-center">
                <Card.Body className="center">
                  <Image
                    src={testimonial.image}
                    roundedCircle
                    className="mb-3"
                  />
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle>{testimonial.role}</Card.Subtitle>
                  <Card.Text>"{testimonial.quote}"</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </section>
    </Container>
  );
}
