import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/JayashCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="IIT BHU CHESS CLUB"
              date="Dec 2020 - Present"
              content={[            
              "Mentored 12 Freshers group in IIT BHU Chess Club.", "Guided them on How to think on Chess Board.", "Taught some Middle Game Theories because they are not covered in Books.", "Gave them Idea on how to read and understand Opening and EndGame Theories from Book",
              ]}
            />

            <Resumecontent
              title="INDUCTION PROGRAM 2020"
              date="Nov 2020 - Present"
              content={[
                "Mentored 20 Freshers Group in Student Counselling Service.", "Helped Freshers to get fit in College’s environment and to connect them altogetherin Online Education System."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="INDIAN INSTITUTE OF TECHNOLOGY (BHU) VARANASI, INDIA"
              date="2019 - Present"
              content={["Mining Engineering", `CGPA: 8.25 /10`]}
            />

            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content={["Selected in top 1% of Candidates in Summer of Bitcoin Qualification Round.",
              "Won HacktoberFest T Shirt for Contributing to OSS.",
              "Finalist of All India Chess League from IIT BHU Team.",
              "Finalist of Quarantine Chess Battle from IIT BHU Team."]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;



