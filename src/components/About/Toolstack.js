import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiGitlab, SiBitbucket, SiPostman, SiVercel } from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab fontSize={"24px"} />
        <div className="tech-icons-text">GitLab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket fontSize={"24px"} />
        <div className="tech-icons-text">Bitbucket</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"24px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel fontSize={"24px"} />
        <div className="tech-icons-text">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
