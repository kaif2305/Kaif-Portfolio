import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/ts.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/ctn.png";
import chatify from "../../Assets/Projects/vk.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Virtual Keyboard"
              description="Virtual Keyboard that work using the fingure gesture, like my index work as a pointer and when we touch middle finger to index it counts as a click. The keys can be seen on the screen, we just need to align our index to the button without any physical touch and can click it as explained."
              ghLink="https://github.com/soumyajit4419/Chatify"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion-based Music Player"
              description="An Emotion-based Music Player utilizes facial landmarks to recognize users' emotions. These detected emotions are then used as input for Spotify, which plays music that matches the identified emotional state, creating a personalized and mood-enhancing music experience."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="News Website"
              description="A news website built with Handlebars, a templating engine, dynamically generates web pages. It combines data and templates to deliver content to users. Handlebars simplifies front-end development by allowing designers and developers to create reusable templates and insert dynamic data, resulting in a responsive and efficient news site."
              ghLink="https://github.com/soumyajit4419/Editor.io"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Conference Website"
              description="Technoscape is a global conference website of VIT college which is devloped by me. It's built with React and Node.js, offering an interactive and efficient platform for international conferences. Leveraging these technologies, it ensures a seamless user experience, facilitating information dissemination and engagement for attendees and organizers worldwide."
              ghLink="https://github.com/soumyajit4419/Plant_AI"

            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
