import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Benefit {
  tab: string;
  title: string;
  subtitle: string;
  features: string[];
  imageUrl: string;
}

interface BenefitSectionProps {
  benefitsSection: {
    text: string;
    title: string;
    subTitle: string;
    benefits: Benefit[];
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
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

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export default function BenefitSection({ benefitsSection }: BenefitSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="benefit-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row>
            <Col lg={8} className="mx-auto text-center">
            <p className="text-section">{benefitsSection.text}</p>
          <h2 className="section-title">{benefitsSection.title}</h2>
          <p className="section-subtitle">{benefitsSection.subTitle}</p>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {benefitsSection.benefits.map((benefit, index) => (
            <BenefitItem key={index} benefit={benefit} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function BenefitItem({ benefit, index }: { benefit: Benefit; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className={`py-5 ${isEven ? '' : ''}`}
    >
      <Container>
        <Row className="align-items-center">
          {isEven ? (
            <>
              <Col lg={6} className="mb-4 mb-lg-0">
                <BenefitContent benefit={benefit} />
              </Col>
              <Col lg={6}>
                <BenefitImage benefit={benefit} isRight={true} />
              </Col>
            </>
          ) : (
            <>
              <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
                <BenefitContent benefit={benefit} />
              </Col>
              <Col lg={6} className="order-lg-1">
                <BenefitImage benefit={benefit} isRight={false} />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}

function BenefitContent({ benefit }: { benefit: Benefit }) {
  return (
    <div className={`pe-lg-4`}>
           <h3 className="title-primary" style={{ textAlign: "start" }}>
              {benefit.title}
            </h3>
            <p className="subTitle-primary" style={{ textAlign: "start" }}>
            {benefit.subtitle}
          </p>
      <ul className="feature-list">
        {benefit.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            className="mb-3 d-flex align-items-start"
            variants={itemVariants}
          >
            <FontAwesomeIcon icon={faCheck} className="text-success me-3 mt-1" />
            <span className="text-justify">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function BenefitImage({ benefit, isRight }: { benefit: Benefit; isRight: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`d-flex justify-content-center ${isRight ? 'justify-content-lg-end' : 'justify-content-lg-start'}`}
    >
      <Image
        src={benefit.imageUrl}
        alt={benefit.title}
        width={500}
        height={300}
        className="img-fluid rounded"
      />
    </motion.div>
  );
}
