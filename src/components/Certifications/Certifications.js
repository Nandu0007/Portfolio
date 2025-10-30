import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { FaCertificate, FaAward } from "react-icons/fa";
import { SiOracle, SiSpringboot, SiInfosys } from "react-icons/si";

function Certifications() {
  const certifications = [
    {
      title: "Advanced Certificate Programme in Full Stack Development",
      issuer: "upGrad",
      status: "Ongoing",
      icon: <FaCertificate />,
      color: "#3b82f6"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      status: "Certified",
      icon: <SiOracle />,
      color: "#f80000"
    },
    {
      title: "Natural Language Processing Using Stanford CoreNLP",
      issuer: "Infosys Springboard",
      status: "Certified",
      icon: <SiInfosys />,
      color: "#007cc3"
    },
    {
      title: "Natural Language Processing Using Python",
      issuer: "Infosys Springboard",
      status: "Certified",
      icon: <SiInfosys />,
      color: "#007cc3"
    },
    {
      title: "Azure DevOps",
      issuer: "Infosys Springboard",
      status: "Certified",
      icon: <SiInfosys />,
      color: "#007cc3"
    }
  ];

  const coursesCompleted = [
    "Full Stack Development",
    "Generative AI",
    "Natural Language Processing",
    "Cloud Computing (Azure)",
    "DevOps Practices"
  ];

  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              Certifications & <strong className="purple">Achievements</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}>
              Professional certifications and continuous learning journey
            </p>
          </Col>
        </Row>

        <Row className="certification-grid">
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} className="certification-card-col" key={index}>
              <Card className="certification-card">
                <Card.Body>
                  <div className="cert-icon" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <Card.Title className="cert-title">{cert.title}</Card.Title>
                  <Card.Subtitle className="cert-issuer mb-2">
                    {cert.issuer}
                  </Card.Subtitle>
                  <div className={`cert-status ${cert.status.toLowerCase()}`}>
                    <FaAward /> {cert.status}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row style={{ marginTop: "50px" }}>
          <Col md={12}>
            <div className="courses-completed-section">
              <h2 className="courses-title">
                <strong className="purple">Courses</strong> Completed
              </h2>
              <div className="courses-list">
                {coursesCompleted.map((course, index) => (
                  <div className="course-badge" key={index}>
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
