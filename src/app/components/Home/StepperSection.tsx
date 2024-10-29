import useDimensions from "@/pages/hooks/useDimensions";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import content from "../../content.json";
import { useInView } from "react-intersection-observer";

export default function CustomStepper() {
  const steps = content.homePage.stepperSection;

  const dimensions = useDimensions();
  const isMobile = dimensions.width && dimensions.width < 1000;
  const [activeStep, setActiveStep] = useState(0);

  const target = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: target,
    offset: ["start start", "end start"],
  });

  const firstStep = useTransform(scrollYProgress, [0, 0.18], ["0%", "100%"]);
  const secondStep = useTransform(
    scrollYProgress,
    [0.18, 0.36],
    ["0%", "100%"]
  );

  const progresses = [firstStep, secondStep, "100%"];

  scrollYProgress.on("change", v => {
    if (v < 0.18) {
      setActiveStep(0);
    } else if (v >= 0.18 && v < 0.36) {
      setActiveStep(1);
    } else if (v >= 0.36 && v < 0.54) {
      setActiveStep(2);
    }
  });

  const handleTabClick = (index: number) => {
    if (target.current != null) {
      const container = target.current;
      const containerHeight = container.scrollHeight;

      const stepIncrements = [0, 0.18, 0.36];

      const scrollToPosition = stepIncrements[index] * containerHeight;

      window.scrollTo({
        top: container.offsetTop + scrollToPosition + 1,
        behavior: "smooth",
      });
    }
  };

  const rotateX = useTransform(scrollY, [0, 300], [14.2702, 0]);
  const translateX = useTransform(scrollY, [0, 300], [0, 0]);
  const translateY = useTransform(scrollY, [0, 300], [0, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1]);
  const rotateY = useTransform(scrollY, [0, 300], [0, 0]);
  const skewX = useTransform(scrollY, [0, 300], [0, 0]);
  const skewY = useTransform(scrollY, [0, 300], [0, 0]);
  const translateZ = useTransform(scrollY, [0, 300], [0, 0]);

  const transform = useTransform(
    [translateX, translateY, scale, rotateX, rotateY, skewX, skewY, translateZ],
    ([tx, ty, sc, rX, rY, skX, skY, tz]) =>
      `perspective(1200px) translateX(${tx}px) translateY(${ty}px) scale(${sc}) rotate(0deg) rotateX(${rX}deg) rotateY(${rY}deg) skewX(${skX}deg) skewY(${skY}deg) translateZ(${tz}px)`
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="stepper-section">
      <Container
        ref={target}
        style={isMobile ? {} : { position: "relative", height: "150vh" }}
      >
        <Row className="mb-5">
          <Col md={12} className="center">
            <p className="text-section">{steps.text}</p>
            {/* <h2 className="section-title">{steps.title}</h2> */}
            <p className="section-subtitle">{steps.subTitle}</p>
          </Col>
        </Row>
        {isMobile ? (
          <Row className="align-items-center justify-content-center">
            {steps.content.map((step, index) => (
              <Col md={12} className="center pb-5" key={index}>
                <h2 className="section-title">{step.stepName}</h2>
                <p className="section-subtitle">{steps.subTitle}</p>

                <Col md={12} className="center">
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "visible"}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="d-flex justify-content-center"
                  >
                    <div
                      className="video-container rounded shadow"
                      style={{
                        width: "100%",
                        maxWidth: "800px",
                        aspectRatio: "16 / 9",
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${step.videoId}?controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0`}
                        allowFullScreen
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                      ></iframe>
                    </div>
                  </motion.div>
                </Col>
              </Col>
            ))}
          </Row>
        ) : (
          <div
            style={{
              position: "sticky",
              top: "0",
              left: "0",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Row className="align-items-center w-100">
              <Col md={12} className="center">
                <div style={{ display: "flex", alignItems: "center" }}>
                  {steps.content.map((step, index) => (
                    <React.Fragment key={index}>
                      <h3
                        onClick={() => handleTabClick(index)}
                        className="h2 mb-0 fw-bold"
                        style={{
                          cursor: "pointer",
                          color: activeStep === index ? "#52796f" : "#84a98c",
                          // marginInline: index < steps.content.length - 1 ? "10px" : "0",
                          marginInline: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {step.stepName}
                      </h3>
                      {index < steps.content.length - 1 && (
                        <div className="progress-bar-notComplete">
                          <motion.div
                            className="progress-bar-complete"
                            style={{
                              width: progresses[index],
                            }}
                          ></motion.div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </Col>
            </Row>
            <Row
              className="align-items-center w-100"
              style={{
                position: "relative",
                overflow: "hidden",
                flexGrow: 1,
              }}
            >
              <Col md={12}>
                <motion.div style={{ transform }}>
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="d-flex justify-content-center"
                  >
                    <div
                      className="video-container rounded shadow"
                      style={{
                        width: "90%",
                        maxWidth: "1000px",
                        aspectRatio: "16 / 9",
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${steps.content[activeStep].videoId}?controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0`}
                        allowFullScreen
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                      ></iframe>
                    </div>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
}
