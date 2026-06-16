import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../assets/img/contact.png";

export const Contact = () => {

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    setStatus({});

    try {

      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();

      setButtonText("Send Message");

      if (response.status === 200) {
        setStatus({
          success: true,
          message: "Message sent successfully!"
        });

        setFormDetails(formInitialDetails);
      } else {
        setStatus({
          success: false,
          message: result.message || "Something went wrong."
        });
      }

    } catch (error) {

      setButtonText("Send Message");

      setStatus({
        success: false,
        message: "Server error. Please try again later."
      });

      console.error(error);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>

        <Row className="align-items-center">
<Col xs={12} md={6} xl={5} style={{ position: "relative", height: "450px" }}>
  <img src={contact} alt="Robot" className="robot-img" />
</Col>
          <Col md={6}>
            <div className="contact-form-box">

              <h2>Get In Touch</h2>

              <form onSubmit={handleSubmit}>

                <Row>

                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formDetails.firstName}
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      required
                    />
                  </Col>

                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formDetails.lastName}
                      onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                      }
                      required
                    />
                  </Col>

                  <Col sm={6}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formDetails.email}
                      onChange={(e) =>
                        onFormUpdate("email", e.target.value)
                      }
                      required
                    />
                  </Col>

                  <Col sm={6}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formDetails.phone}
                      onChange={(e) =>
                        onFormUpdate("phone", e.target.value)
                      }
                    />
                  </Col>

                  <Col>
                    <textarea
                      rows="3"
                      placeholder="Your Message"
                      value={formDetails.message}
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }
                      required
                    ></textarea>
                  </Col>

                  <Col>

                    <button
                      type="submit"
                      className="contact-btn"
                      disabled={buttonText === "Sending..."}
                    >
                      {buttonText}
                    </button>

                  </Col>

                  {status.message && (
                    <Col>

                      <p
                        className={
                          status.success
                            ? "contact-success"
                            : "contact-error"
                        }
                      >
                        {status.message}
                      </p>

                    </Col>
                  )}

                </Row>

              </form>

            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};