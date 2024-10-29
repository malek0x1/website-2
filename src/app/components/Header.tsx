import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LOGO from "../../../public/images/starlake-logo.png";

export default function Header({
  faqSectionRef,
}: {
  faqSectionRef: React.RefObject<HTMLDivElement>;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleScrollToFAQ = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setExpanded(false);
    }
  };

  const handleClickJoin = () => {
    window.open(
      "https://join.slack.com/t/starlakeai/shared_invite/zt-28vf5d49s-rnyuh70OrJjcX_2Vz2mafw",
      "_blank"
    );
  };

  const handleClickTry = () => {
    window.open("https://github.com/starlake-ai/starlake", "_blank");
  };

  return (
    <>
      <header className="bg-light">
        <Navbar
          collapseOnSelect
          expand="lg"
          expanded={expanded}
          onToggle={setExpanded}
          className="bg-body-tertiary headerCustom"
          style={{ padding: "0px" }}
        >
          <Container fluid style={{ maxWidth: "1300px" }}>
            <Navbar.Brand href="/">
              <Image src={LOGO.src} alt="Starlake Logo" width={"50px"} />
              Starlake.ai
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`${expanded ? "mx-auto" : "ms-auto"}`}>
                <Nav.Link onClick={handleScrollToFAQ}>Pricing</Nav.Link>
                <Nav.Link href="/starlake/docs/intro/index.html">
                  Documentation
                </Nav.Link>
                <Nav.Link href="/starlake/blog/index.html">Blog</Nav.Link>
              </Nav>
              <Nav>
                <Button
                  variant="outline-primary me-2 customButton"
                  onClick={handleClickJoin}
                  style={{ height: "40px" }}
                >
                  <FontAwesomeIcon
                    icon={faSlack}
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "5px",
                      marginTop: "2px",
                    }}
                  />
                  Join us
                </Button>
                <Button
                  variant="outline-primary me-2 customButton"
                  onClick={handleClickTry}
                  style={{ height: "40px" }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "5px",
                      marginTop: "2px",
                    }}
                  />
                  Star us
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
