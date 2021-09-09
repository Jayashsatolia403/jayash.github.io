import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jayash Satolia </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />I am a current student at IIT BHU Varanasi pursuing bachelors degree in Mining Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess & Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Intelligence is Ability to adapt Change!"{" "}
          </p>
          <footer className="blockquote-footer">Jayash</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
