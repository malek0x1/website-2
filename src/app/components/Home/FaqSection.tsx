import React from "react";
import { Accordion, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function FaqSection({ faqSection }: { faqSection: any }) {
  return (
    <Container>
      <Col md={12} className="center">
        <h2 className="section-title">{faqSection.title}</h2>
        <p className="text-section">{faqSection.text}</p>
        <p className="section-subtitle">{faqSection.subTitle}</p>
      </Col>

      <Accordion defaultActiveKey="1" className="custom-accordion">
        {faqSection.accordion.map((item: any, index: number) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.title} </Accordion.Header>

            <Accordion.Body>
              <p className="subTitle-primary" style={{ textAlign: "start" }}>
                {item.subTitle}
              </p>
              <ul className="feature-list" style={{ textAlign: "start" }}>
                {item.content.map(
                  (
                    feature: { text: string; color?: string; weight?: boolean },
                    index: number
                  ) => (
                    <li
                      key={index}
                      className="feature-item subTitle-primary"
                      style={{
                        textAlign: "start",
                        color: feature.color || "inherit",
                        fontWeight: feature.weight ? "bold" : "normal",
                      }}
                    >
                      <FontAwesomeIcon icon={faCheck} className="check-icon" />
                      {feature.text}
                    </li>
                  )
                )}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
