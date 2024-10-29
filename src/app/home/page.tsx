"use client";

import BenefitSection from "@/components/Home/BenefitSection";
import CardSection from "@/components/Home/CardSection";
import FaqSection from "@/components/Home/FaqSection";
import HeroSection from "@/components/Home/HeroSection";
import StepperSection from "@/components/Home/StepperSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import CookieConsent from "react-cookie-consent";
import "react-modal-video/scss/modal-video.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import content from "../content.json";
import CtaSection from "@/components/Home/CtaSection";
import { motion } from "framer-motion";
import Header from "@/components/Header";
export default function Home() {
  const { title, subtitle, image, buttons } = content.homePage.heroSection;
  const {
    benefitsSection,
    testimonialsSection,
    faqSection,
    cardSection,
    cookie,
  } = content.homePage;

  const stepperRef = useRef<HTMLElement>(null);

  const scrollToStepper = () => {
    if (stepperRef.current) {
      window.scrollTo({
        top: stepperRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const faqSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header faqSectionRef={faqSectionRef} />
      <div id="home-page">
        {/* Hero Section */}
        <section className="spacing-top">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection
              title={title}
              subtitle={subtitle}
              image={image}
              buttons={buttons}
              onLearnMoreClick={scrollToStepper}
            />
          </motion.div>
        </section>

        {/* Card Section */}
        <section
          className="spacing-top"
          style={{ borderTop: "2px solid #f5f5f5" }}
        >
          <CardSection cardSection={cardSection} />
        </section>

        {/* Testimonials Section */}
        {/* <section
        className="spacing-top"
        style={{ borderTop: "2px solid #f5f5f5", paddingTop: "5rem" }}
      >
        <TestimonialSection testimonialsSection={testimonialsSection} />
      </section> */}

        {/* Benefits section */}
        <section
          className="spacing-top-exeption"
          style={{ borderTop: "2px solid #f5f5f5" }}
        >
          <BenefitSection benefitsSection={benefitsSection} />
        </section>

        {/* Stepper section */}
        <section
          className="spacing-top-exeption"
          style={{
            borderTop: "2px solid #f5f5f5",
          }}
          ref={stepperRef}
        >
          <StepperSection />
        </section>

        <section
          className="spacing-top"
          style={{ borderTop: "2px solid #f5f5f5" }}
        >
          <CtaSection
            title="Ready to Transform Your Data Workflow?"
            subtitle="Join the waitlist for Starlake Cloud and be among the first to experience the future of data analytics."
            buttonText="Join Waitlist"
          />
        </section>

        {/* FAQ Section */}
        <section
          ref={faqSectionRef}
          className="spacing-top"
          style={{ borderTop: "2px solid #f5f5f5" }}
        >
          <FaqSection faqSection={faqSection} />
        </section>

        <section>
          <Row>
            <Col md="12" className="end">
              <CookieConsent
                location="bottom"
                buttonText={cookie.btnName}
                cookieName={cookie.cookieName}
                expires={150}
              >
                {cookie.text}
              </CookieConsent>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
}
