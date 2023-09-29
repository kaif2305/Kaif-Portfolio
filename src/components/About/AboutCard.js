import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kaif Ahmad </span>
            from <span className="purple"> Ranch, Jharkhand, India.</span>
            <br /> I am a final year student pursuing Bachelor of Technology in Computer Science with specialization in Information Security at Vellore Institute of Technology - Vellore, India.
            <br />
            Additionally, I have undertaken the projects for automation through artificial intelligence for various organisations and International Conferences.
            <br />
            <br />
            Apart from being involved in coding, I am also inclined towards:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Non-fiction
            </li>
            <li className="about-activity">
              <ImPointRight /> Walking with an idea in head
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
