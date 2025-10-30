import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiCodeReview from "../../Assets/Projects/AI-Powered Code Review Assistant.png";
import financeTracker from "../../Assets/Projects/Personal Finance Tracker.jpg";
import systemMonitoring from "../../Assets/Projects/Real-time System Monitoring.jpg";
import faceMask from "../../Assets/Projects/Face Mask Detection Using C.png";
import snakeGame from "../../Assets/Projects/Snake Game Using C.jpeg";
import collabEditor from "../../Assets/Projects/codeEditor.png";
import audioRoom from "../../Assets/Projects/chatify.png";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const projectsData = [
    {
      imgPath: aiCodeReview,
      title: "AI-Powered Code Review Assistant",
      description: "Fine-tuned language models trained to accurately code review data. Supports GitHub, GitLab, and Bitbucket. Features automated code reviews with intelligent suggestions and visualizes trends to improve code quality over time.",
      ghLink: "https://github.com/Nandu0007/-AI-Powered-Code-Review-Assistant",
      category: "AI/ML",
      tags: ["AI", "Machine Learning", "Python"]
    },
    {
      imgPath: collabEditor,
      title: "Collaborative Code Editor",
      description: "Real-time collaborative code editor for multi-user coding sessions. Built with JavaScript. Features live syntax highlighting, conflict resolution, and Web Socket communication for secure authentication with a scalable low-latency backend.",
      ghLink: "https://github.com/Nandu0007/collab-code-editor",
      category: "Web App",
      tags: ["JavaScript", "WebSocket", "Real-time"]
    },
    {
      imgPath: audioRoom,
      title: "Audio Room",
      description: "A Flutter-based application for managing live audio rooms for interactive discussions. Built with Dart, designed for real-time audio engagement and moderation. Features seamless audio quality and community participation management.",
      ghLink: "https://github.com/Nandu0007/audioroom",
      category: "Mobile App",
      tags: ["Flutter", "Dart", "Mobile"]
    },
    {
      imgPath: financeTracker,
      title: "Personal Finance Tracker",
      description: "Full-featured personal finance tracker built with JavaScript. Monitor income, expenses, and savings with automated expense categorization and monthly financial reports. Includes intuitive dashboards to visualize cash flow, budgeting trends, and secure data storage.",
      ghLink: "https://github.com/Nandu0007/Personal-Finance-Tracker",
      category: "Web App",
      tags: ["JavaScript", "Dashboard", "Finance"]
    },
    {
      imgPath: systemMonitoring,
      title: "Real-time System Monitoring",
      description: "Python-based real-time system monitoring tool. Monitor CPU, memory, disk usage, and network activity in real-time. Features visual dashboards and alerts for system performance tracking and resource management.",
      ghLink: "https://github.com/Nandu0007/Real-time-System-Monitoring",
      category: "Tools",
      tags: ["Python", "Monitoring", "Real-time"]
    },
    {
      imgPath: faceMask,
      title: "Face Mask Detection Using C",
      description: "Face mask detection system implemented in C programming language. Uses image processing techniques to detect whether a person is wearing a face mask. Demonstrates computer vision fundamentals and real-time detection capabilities.",
      ghLink: "https://github.com/Nandu0007/Face-Mask-Detection-Using-C",
      category: "AI/ML",
      tags: ["C", "Computer Vision", "OpenCV"]
    },
    {
      imgPath: snakeGame,
      title: "Snake Game Using C",
      description: "Classic snake game implementation in C++. Features smooth gameplay, score tracking, and collision detection. Demonstrates object-oriented programming concepts and game development fundamentals with terminal-based graphics.",
      ghLink: "https://github.com/Nandu0007/Snake-Game-Using-C",
      category: "Game",
      tags: ["C++", "Game Dev"]
    }
  ];

  const categories = ["All", "AI/ML", "Web App", "Mobile App", "Tools", "Game"];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Search and Filter */}
        <Row className="project-filter-section">
          <Col md={12} className="search-box-container">
            <Form.Control
              type="text"
              placeholder="🔍 Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="project-search-input"
            />
          </Col>
          <Col md={12} className="filter-buttons-container">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => {
                  console.log('Filter clicked:', category);
                  setActiveFilter(category);
                }}
              >
                {category}
              </button>
            ))}
          </Col>
        </Row>

        {/* Project Count */}
        <p style={{ color: "#60a5fa", textAlign: "center", marginTop: "20px" }}>
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                />
              </Col>
            ))
          ) : (
            <Col md={12} style={{ textAlign: "center", padding: "50px" }}>
              <h3 style={{ color: "white" }}>No projects found matching your criteria 😔</h3>
              <p style={{ color: "#94a3b8" }}>Try adjusting your search or filter</p>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
