import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "animate.css";

import beautyparlour from "../assets/img/beautyparlour.png";
import consultancy from "../assets/img/consultancy.png";
import newsportal from "../assets/img/newsportal.png";
import portfolio from "../assets/img/portfolio.png";
import digitalmarketing from "../assets/img/digitalmarketing.png";
import marketing from "../assets/img/marketing.png";

export const Projects = () => {
  const projects = [
    {
      title: "Beauty Parlour Management System",
      description: "Frontend Development using HTML, CSS & Bootstrap",
      imgUrl: beautyparlour,
    },
    {
      title: "Consultancy Website",
      description: "Responsive website built with HTML, CSS, Bootstrap, JavaScript",
      imgUrl: consultancy,
    },
    {
      title: "News Portal",
      description: "Dynamic portal using React, Tailwind & JS",
      imgUrl: newsportal,
    },
    {
      title: "Personal Portfolio",
      description: "Showcasing projects with React, Tailwind, CSS, JavaScript",
      imgUrl: portfolio,
    },
    {
      title: "Launch Your Career in Digital Marketing",
      description: "Frontend & UI Design using HTML, CSS & JS",
      imgUrl: digitalmarketing,
    },
    {
      title: "IMAGE UI",
      description: "Frontend Development using HTML, CSS & Bootstrap",
      imgUrl: marketing,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>

            {/* ✅ TrackVisibility Proper Structure */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have worked on various frontend projects focusing on clean UI,
                    responsive layouts, and smooth user experience. These projects
                    showcase my skills in React, Bootstrap, and modern web design
                    practices.
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>

     
    </section>
  );
};