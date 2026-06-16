import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <MailchimpForm />

        <Row className="align-items-center justify-content-between">
          <Col sm={6}>
            <h2 className="font-bold m-0"></h2>
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-center justify-content-sm-end gap-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon-item" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon-item" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon-item" />
              </a>
            </div>
            <p>CopyRight 2022, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};