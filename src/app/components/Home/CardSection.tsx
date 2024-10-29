import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from 'next/image';

// Define types for our props and card data
interface CardData {
  src: string;
  title: string;
  description: string;
  alt: string;
}

interface CardSectionProps {
  cardSection: {
    text: string;
    title: string;
    subtitle: string;
    card: CardData[];
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
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

export default function CardSection({ cardSection }: CardSectionProps) {
  const {card } = cardSection;

  return (
    <section className="card-container">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="mb-5">
          <Col md={12} className="center">
          <p className="text-section">{cardSection.text}</p>
          <h2 className="section-title">{cardSection.title}</h2>
          <p className="section-subtitle">{cardSection.subtitle}</p>
        </Col>
          </Row>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-4 justify-content-center">
            {card.map((cardItem, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >

                  
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column align-items-center p-4">
                      <motion.div
                        className="card-icon mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={cardItem.src}
                          alt={cardItem.alt}
                          width={70}
                          height={70}
                          className="img-fluid"
                        />
                      </motion.div>
                      <h3 className="card-title text-center">{cardItem.title}</h3>
                      <p  className="card-description">{cardItem.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
