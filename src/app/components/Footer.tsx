import {
  faGithub,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import content from "../content.json";
export default function App() {
  const handleClickJoin = () => {
    window.open(
      "https://join.slack.com/t/starlakeai/shared_invite/zt-28vf5d49s-rnyuh70OrJjcX_2Vz2mafw",
      "_blank"
    );
  };
  const handleClickTry = () => {
    window.open("https://github.com/starlake-ai/starlake", "_blank");
  };
  const handleClickLink = () => {
    window.open(
      "https://www.linkedin.com/company/starlake-ai/",
      "_blank"
    );
  };
  return (
    <footer className="bg-light text-center text-lg-start text-muted mt-5 pt-3">
      <section className="mt-5">
        <Container className="text-center text-md-start">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-title">
                {content.footer.company.name}
              </h6>
              <p className="footer-link">
                {content.footer.company.description}
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-title">
                Resources
              </h6>
              <p>
                <a
                  href="/starlake/docs/intro/index.html"
                  className="footer-link"
                >
                  Docs
                </a>
              </p>
              <p>
                <a href="/starlake/blog/index.html" className="footer-link">
                  Blog
                </a>
              </p>
              <p style={{ fontSize: "20px" }}>
                <a onClick={handleClickLink} className="footer-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    width={"24px"}
                    height={"24px"}
                    className="me-2"
                  />
                </a>
                <a onClick={handleClickJoin} className="footer-link">
                  <FontAwesomeIcon
                    icon={faSlack}
                    width={"24px"}
                    height={"24px"}
                    className="me-2"
                  />
                </a>

                <a onClick={handleClickTry} className="footer-link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    width={"24px"}
                    height={"24px"}
                    className="me-2"
                  />
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-2 footerCustom">
        {content.footer.copyright.text}&nbsp;
        <a
          className="footer-link fw-bold"
          href={content.footer.copyright.companyLink}
        >
          {content.footer.copyright.company}
        </a>
      </div>
    </footer>
  );
}
