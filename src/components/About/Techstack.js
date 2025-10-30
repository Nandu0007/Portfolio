import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiFlutter, SiDart, SiTensorflow, SiOpencv } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")} style={{ cursor: "pointer" }}>
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.java.com", "_blank")} style={{ cursor: "pointer" }}>
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.python.org", "_blank")} style={{ cursor: "pointer" }}>
        <img src={Python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.mysql.com", "_blank")} style={{ cursor: "pointer" }}>
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://cplusplus.com", "_blank")} style={{ cursor: "pointer" }}>
        <img src={C} alt="C" />
        <div className="tech-icons-text">C/C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://nodejs.org", "_blank")} style={{ cursor: "pointer" }}>
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://react.dev", "_blank")} style={{ cursor: "pointer" }}>
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://flutter.dev", "_blank")} style={{ cursor: "pointer" }}>
        <SiFlutter fontSize={"24px"} />
        <div className="tech-icons-text">Flutter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://dart.dev", "_blank")} style={{ cursor: "pointer" }}>
        <SiDart fontSize={"24px"} />
        <div className="tech-icons-text">Dart</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.mongodb.com", "_blank")} style={{ cursor: "pointer" }}>
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://git-scm.com", "_blank")} style={{ cursor: "pointer" }}>
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.tensorflow.org", "_blank")} style={{ cursor: "pointer" }}>
        <SiTensorflow fontSize={"24px"} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://opencv.org", "_blank")} style={{ cursor: "pointer" }}>
        <SiOpencv fontSize={"24px"} />
        <div className="tech-icons-text">OpenCV</div>
      </Col>
    </Row>
  );
}

export default Techstack;
