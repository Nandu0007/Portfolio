import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiGitlab, SiBitbucket, SiPostman, SiVercel } from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://code.visualstudio.com", "_blank")} style={{ cursor: "pointer" }}>
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://github.com", "_blank")} style={{ cursor: "pointer" }}>
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://about.gitlab.com", "_blank")} style={{ cursor: "pointer" }}>
        <SiGitlab fontSize={"24px"} />
        <div className="tech-icons-text">GitLab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://bitbucket.org", "_blank")} style={{ cursor: "pointer" }}>
        <SiBitbucket fontSize={"24px"} />
        <div className="tech-icons-text">Bitbucket</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.postman.com", "_blank")} style={{ cursor: "pointer" }}>
        <SiPostman fontSize={"24px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://vercel.com", "_blank")} style={{ cursor: "pointer" }}>
        <SiVercel fontSize={"24px"} />
        <div className="tech-icons-text">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
