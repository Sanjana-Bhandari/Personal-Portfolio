import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa"; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => { 
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" expanded={expanded} className={scrolled ? "scrolled" : ""}>
  <Container>

    <Navbar.Brand
      href="#home"
      className="text-white"
      style={{ fontSize: "2rem" }}
    >
      LOGO
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setExpanded(!expanded)} />

    {/* ONLY MENU LINKS */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto d-flex gap-3">
        <Nav.Link
          href="#home"
          className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
         onClick={() => { onUpdateActiveLink("home"); setExpanded(false);}}
        >
          Home
        </Nav.Link>

        <Nav.Link
          href="#skills"
          className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
         onClick={() => { onUpdateActiveLink("skills"); setExpanded(false);}}
        >
          Skills
        </Nav.Link>

        <Nav.Link
          href="#projects"
          className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
          onClick={() => { onUpdateActiveLink("projects"); setExpanded(false);}}
        >
          Projects
        </Nav.Link>
      </Nav>

{/* mobile responsive with menu */}
      <div className="d-lg-none text-center mt-3">
  <div className="social-icon justify-content-center">

    <a
  href="https://www.linkedin.com/in/sanjana-kumari-9930ab3a2/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setExpanded(false)}
>
  <FaLinkedin className="social-icon-item" />
</a>

    <a
  href="https://www.facebook.com/sanjana.bhandari.7528"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setExpanded(false)}
>
  <FaFacebookF className="social-icon-item" />
</a>
   <a
  href="https://www.instagram.com/sanjana_b22/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setExpanded(false)}
>
  <FaInstagram className="social-icon-item" />
</a>

  </div>

  <button className="vvd mt-3"
   onClick={() => setExpanded(false)}>
    <span>Let's Connect</span>
  </button>
</div>



    </Navbar.Collapse>




   {/* ALWAYS VISIBLE */}
<span className="navbar-text d-none d-lg-flex align-items-center gap-3">
  <div className="social-icon d-flex gap-2">

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/sanjana-kumari-9930ab3a2/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="social-icon-item" />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/sanjana.bhandari.7528"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF className="social-icon-item" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/sanjana_b22/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="social-icon-item" />
    </a>

  </div>

  <button className="vvd">
    <span>Let's Connect</span>
  </button>
</span>

  </Container>
</Navbar>
  );
};