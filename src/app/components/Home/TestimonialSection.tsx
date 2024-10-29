import React from "react";
import { Card, Col, Container, Image } from "react-bootstrap";
import Slider from "react-slick";

export default function TestimonialSection({
  testimonialsSection,
}: {
  testimonialsSection: any;
}) {
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
    <Container className="card-container">
      <Col md={12} className="center mb-4">
        <p className="text-section">{testimonialsSection.text}</p>
        <h2 className="section-title">{testimonialsSection.title}</h2>
        <p className="section-subtitle">{testimonialsSection.subTitle}</p>
      </Col>
      <Slider {...settings} className="testimonialSlider">
        {testimonialsSection.testimonials.map(
          (testimonial: any, index: number) => (
            <div key={index} className="testimonialCard">
              <Card className="center">
                <Card.Header>
                  <Image src={testimonial.src} alt={testimonial.name} />
                </Card.Header>
                <Card.Body className="center">
                  <Card.Title className="card-title">
                    {testimonial.name}
                  </Card.Title>
                  <Card.Text className="card-description">
                    {testimonial.quote}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        )}
      </Slider>
    </Container>
  );
}
