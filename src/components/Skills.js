import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import html from "../assets/img/html.png";
import css1 from "../assets/img/css1.png";
import javascript1 from "../assets/img/javascript1.png";
import react2 from "../assets/img/react2.png";
import bootstrap1 from "../assets/img/bootstrap1.png";
import tailwind2 from "../assets/img/tailwind2.png";
import github3 from "../assets/img/github3.png";
import uiux1 from "../assets/img/ui-ux1.png";
// import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I am a skilled Frontend Developer, specializing in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind, building responsive and dynamic web applications. I combine technical expertise with a strong sense of UI/UX design to create visually appealing and user-friendly interfaces. My goal is to craft websites that are not only functional but also engaging and memorable for every user.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Frontend Developer" />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={css1} alt="Brand Identity" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={javascript1} alt="Logo Design" />
                  <h5>JAVASCRIPT</h5>
                </div>

                <div className="item">
                  <img src={react2} alt="Web Design" />
                  <h5>REACT</h5>
                </div>
                 <div className="item">
                  <img src={bootstrap1} alt="Web Design" />
                  <h5>BOOTSTRAP</h5>
                </div>
                 <div className="item">
                  <img src={tailwind2} alt="Web Design" />
                  <h5>TAILWIND</h5>
                </div>
                <div className="item">
                  <img src={github3} alt="Web Design" />
                  <h5>GITHUB</h5>
                </div>
                <div className="item">
                  <img src={uiux1} alt="Web Design" />
                  <h5>UI/UX</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Decorative ColorSharp background */}
      <img
        className="background-image-left"
        // src={colorSharp}
        alt="Background Shape"
      />
    </section>
  );
};