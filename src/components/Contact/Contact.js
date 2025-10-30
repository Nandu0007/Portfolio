import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:nandishreddy00700@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} className="contact-info">
            <h2 className="contact-title">Contact Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <HiLocationMarker className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="contact-item">
                <AiOutlineMail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>nandishreddy00700@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <AiOutlinePhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 8971433617</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect with me</h3>
              <div className="contact-social-links">
                <a
                  href="https://github.com/Nandu0007"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/nandishreddy7"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-icon"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Col>

          <Col md={6} className="contact-form-container">
            <h2 className="contact-title">Send me a message</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="contact-submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
