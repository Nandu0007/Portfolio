import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Nandish Reddy</span>{" "}
            from <span className="purple">Bengaluru, Karnataka, India</span>.
            <br />
            I'm pursuing my B.Tech in{" "}
            <span className="purple">Computer Science (AI & ML)</span> from{" "}
            <span className="purple">CMR UNIVERSITY, Bengaluru</span>.
            <br />
            I specialize in <span className="purple">Full-Stack Development</span> and{" "}
            <span className="purple">AI/ML</span>, with hands-on experience in building
            collaborative tools, AI-powered applications, and scalable web solutions.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building innovative projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem solving & algorithms 🧩
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nandish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
