"use client";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import content from "../content.json";

interface Section {
  heading: string;
  content: string;
}

interface PrivacyPolicyContent {
  title: string;
  introduction: string;
  sections: Section[];
}

interface Content {
  privacyPolicy: PrivacyPolicyContent;
}

const PrivacyPolicy: React.FC = () => {
  const [privacyContent, setPrivacyContent] =
    useState<PrivacyPolicyContent | null>(null);

  useEffect(() => {
    const loadedContent: Content = content as Content;
    setPrivacyContent(loadedContent.privacyPolicy);
  }, []);

  if (!privacyContent) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <h2 className="section-title">{privacyContent.title}</h2>
          <p className="section-subtitle">{privacyContent.introduction}</p>
          {privacyContent.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h3
                className="title-primary"
                style={{ fontSize: "20px", textAlign: "start" }}
              >
                {section.heading}
              </h3>
              <p
                className="subTitle-primary"
                style={{ fontSize: "16px", textAlign: "start" }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
