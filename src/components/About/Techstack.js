import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiHtml5,
  DiDjango,
  DiPython,
  DiGit,
  DiPostgresql,
  DiCss3,
  Algorithmic,
} from "react-icons/di";

import {RiFlutterLine} from 'react-icons/ri';


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Algorithmic />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFlutterLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> */}
    </Row>
  );
}

export default Techstack;
