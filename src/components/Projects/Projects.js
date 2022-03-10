import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "../Resume/ResumeContent";
import { BiLinkExternal } from "react-icons/bi";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">SMARTPREP APP</h3>
            <Resumecontent
              title="Mobile App & API"
              date="December 2021"
              content={[
                "eveloped a mobile application from scratch using flutter that helps users to prepare for various competitive exams held in India by providing : Quality daily questions | Weekly Competitions | Practice Questions | Best Question of the Day | Rewarded Questions | Quote of the Day.",
                "Features : Smartprep App have 4 types of Subscriptions : Free | Standard | Premium | Ultimate. Users can Rate questions on the basis of Quality and difficulty, Add new questions on the Platform, Access an exam specific Forum where they can discuss questions and other things with their peers.",
                "Utilised Django Rest Framework to implement Card Payment using Stripe Payment Gateway, Token Authentication & multiple Features related to questions in API. Used Sqlite3 for Database & Azure for Deployment.",
                "Utilised Flutter to implement Frontend of App, Admob Banner & Rewarded Video Ads, Katex for Maths Questions, Pagination, SplashScreen, Homepage, Practice Section, QuestionView, Sharedpreferences and Sqflite for storing tokens and questions mobile storage.",
                "Exposure : Python | Django Rest Framework | Flutter | Sqlite3 | Azure App Service | Stripe API | Admob | Git | VSCode | Linux | Katex"
              ]}
            />
            <Button variant="primary" href="https://github.com/Jayashsatolia403/smartprep-app" target="_blank">
              <BiLinkExternal /> &nbsp;
              {"View Project"}
            </Button>
            <h3 className="resume-title">CODE COMPETITION</h3>
            <Resumecontent
              title="API"
              date="May 2021"
              content={["Developed an Application Programming Interface from Scratch that allows programmers to compete on Algorithmic Problems in real time while having Video Chatting ( Fun way to practice Coding ).",
              "Included Unit Testing for multiple patches of code to increase the test coverage of Backend API.",
              "Implemented Token Authentication to Authenticate userlogin and signup.",
              "Implemented Additional Features such as Email Verification System to verify new user’s email.",
              "Utilized Webrtc and ExpressJS to add Video Chatting Feature.",
              "Hosted Complete API on Heroku Cloud Service.",
              "Exposure : Python 3 | Django | PostgreSQL | Git | HTML | CSS | JS | Docker"]}
            />
            <Button variant="primary" href="https://github.com/Jayashsatolia403/Projects" target="_blank">
              <BiLinkExternal /> &nbsp;
              {"View Project"}
            </Button>
          </Col>

          <Col md={6} className="resume-left">
            <h3 className="resume-title">ECOMMERCE MARKETPLACE</h3>
            <Resumecontent
              title="WEBSITE & API"
              date="April 2021"
              content={["Developed a Web Application and API that allows people to get daily use items within 2 hrs entirely online.",
              "Included Unit Testing for multiple patches of code to increase the test coverage of Application.",
              "Used Django Templates, HTML5, CSS3, JS to build Frontend of Website.",
              "Used Basics of Docker to Containerise Backend of Application.",
              "Hosted Complete Website on pythonanywhere.",
              "Utilized PostgreSQL DB to build Webapp’s Database Model.",
              "Exposure : Python 3 | Django | PostgreSQL | Git | HTML | CSS | JS | Docker"]}
            />
            <Button variant="primary" href="https://github.com/Jayashsatolia403/Projects" target="_blank">
              <BiLinkExternal /> &nbsp;
              {"View Project"}
            </Button>

            <h3 className="resume-title">MAFIA ONLINE GAME</h3>
            <Resumecontent
              title="GAME & API"
              date="March 2021"
              content={["Developed a Game that allows users to play Family Mafia Game completely online with their Friends and Family with the features of Voice Chatting.", 
              "Utilized Concepts of Object Oriented Programming to Structure the Code.",
              "Used Django Rest Framework to develop API of the game and Webrtc to setup Voice Chat.", 
              "Used ReactJS, HTML, CSS and JS to build Frontend of Game.",
              "Exposure : Python 3 | Django | Postgresql | Git | React | Webrtc"]}
            />
            <Button variant="primary" href="https://github.com/Jayashsatolia403/Projects" target="_blank">
              <BiLinkExternal /> &nbsp;
              {"View Project"}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;



