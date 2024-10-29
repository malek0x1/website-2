import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function CtaSection({ title, subtitle, buttonText }: CtaSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const actionUrl = "https://getlaunchlist.com/s/0I2Unx";

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
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <section className="cta-section">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="section-title">{title}</h2>
              <p className="section-subtitle">{subtitle}</p>
              {!isSubmitted ? (
                <Form className="launchlist-form" onSubmit={handleSubmit}>
                  <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} lg={3}>
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
                            />{" "}
                            Please wait...
                          </>
                        ) : (
                          buttonText
                        )}
                      </Button>
                    </Col>
                  </Row>
                  {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                </Form>
              ) : (
                <Alert variant="success">
                  Thank you for joining the waitlist!
                </Alert>
              )}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
