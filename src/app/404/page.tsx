// src/app/404/page.tsx
"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function Custom404() {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
}
