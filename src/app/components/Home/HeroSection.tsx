import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Image, Modal, Row, Spinner } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection({
  title,
  subtitle,
  buttons,
  image,
  onLearnMoreClick,
}: {
  title: string;
  subtitle: string;
  buttons: Array<any>;
  image: { src: string; alt: string };
  onLearnMoreClick: () => void;
}) {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {setShowModal(false) ; setIsSubmitted(false) ; setErrorMessage('')}; 

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const form = e.target;
    const formData = new FormData(form);
    const actionUrl = form.getAttribute("action");

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      setIsLoading(false);

      if (data.ok) {
        setIsSubmitted(true); // Success
      } else {
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Something went wrong');
    }
  };
  return (
    <Container className="hero-container">
      <Row>
        <Col md={12} lg={6}>
          <h1 className="hero-title">{title}</h1>
          <span className="hero-subTitle">
            <div style={{ height: "55px" }}>
              <TypeAnimation
                preRenderFirstString={false}
                sequence={[
                  1000,
                  "No Code Ingestion",
                  1000,
                  "Low Code Transforms",
                  1000,
                  "Automated Workflows",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={false}
              />
            </div>
          </span>
          <p className="hero-description" style={{ marginTop: "10px" }}>
            {subtitle}
          </p>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              style={button.style}
              onClick={
                button.text === "Learn More" ? onLearnMoreClick : handleShowModal
              }
            >
              {button.text}
            </Button>
          ))}
        </Col>
        <Col md={12} lg={6} className="hero-img-col center">
          <Image src={image.src} alt={image.alt} className="hero-image" />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered > 
    <Modal.Header closeButton>
      <Modal.Title>Try Starlake Cloud</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {!isSubmitted ? (
        <Form className="launchlist-form" action="https://getlaunchlist.com/s/0I2Unx" method="POST" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Please wait...
              </>
            ) : (
              'Join Waitlist'
            )}
          </Button>

          {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
        </Form>
      ) : (
        <Alert variant="success">
          Thank you for joining the waitlist!
        </Alert>
      )}
    </Modal.Body>
  </Modal>
    </Container>
  );
}
