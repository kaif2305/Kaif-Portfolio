import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/ts.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/ctn.png";
import chatify from "../../Assets/Projects/vk.png";
import honeypot from "../../Assets/Projects/honeypot.png";
import data from "../../Assets/Projects/data.png";
import HNP from "../../Assets/Projects/hnp.png";
import CFP from "../../Assets/Projects/cfp.png";
import NID from "../../Assets/Projects/nid.png";
import MP from "../../Assets/Projects/MP.png";
import netflix from "../../Assets/Projects/netflix.png";
import rsa from "../../Assets/Projects/rsa.png";

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
              ghLink="https://github.com/kaif2305/Virtual-Keyboard"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion-based Music Player"
              description="An Emotion-based Music Player utilizes facial landmarks to recognize users' emotions. These detected emotions are then used as input for Spotify, which plays music that matches the identified emotional state, creating a personalized and mood-enhancing music experience."
              ghLink="https://github.com/kaif2305/Emotionbased_MusicPlayer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HNP}
              isBlog={false}
              title="Helmet and Number Plate Detection"
              description="Helmet and number plate detection employ cutting-edge AI models, like YOLO (You Only Look Once) and SSD (Single Shot MultiBox Detector), ensuring real-time accuracy. YOLO's unified approach predicts object classes and bounding boxes simultaneously, while SSD's use of multiple feature maps enables precise detection of varying object sizes. These models power advanced traffic safety systems."
              ghLink="https://github.com/kaif2305/Helmet-and-Number-Plate-Detection"

            />
          </Col>






          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NID}
              isBlog={false}
              title="Network Intrusion Detection System using ML"
              description="A network intrusion detection system (NIDS) utilizes machine learning algorithms to analyze network traffic patterns and identify suspicious activities or potential security threats in real-time. ML algorithms detect anomalies, patterns, and known attack signatures, enhancing cybersecurity by automatically alerting or blocking unauthorized access, ensuring network integrity and data protection."
              ghLink="https://github.com/kaif2305/Network-Intrusion-Detection-Using-Machine-Learning-Techniques"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Medical Dataset Masking"
              description="Medical dataset masking with ML techniques involves preserving data privacy by anonymizing sensitive patient information while maintaining dataset utility. Machine learning algorithms, such as generative adversarial networks (GANs) or differential privacy methods, are applied to transform data, ensuring anonymity for compliance with privacy regulations, while retaining the dataset's essential information for research and analysis purposes."
              ghLink="https://github.com/kaif2305/Medical-Dataset-Masking"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={honeypot}
              isBlog={false}
              title="Honeypot Deception"
              description="Honeypot deception technique involves setting up decoy computer systems or networks to lure cyber attackers. These traps imitate real systems, enticing hackers to interact with them. Security professionals monitor these honeypots, gathering valuable insights into attackers' tactics and preventing real network breaches. It's an active defense strategy, enhancing cybersecurity by diverting and studying malicious activities."
              ghLink="https://github.com/kaif2305/Honeypot-Deception"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MP}
              isBlog={false}
              title="Mental Poker"
              description="Mental poker cryptography enables secure card game play over untrusted networks. Players use cryptographic protocols to shuffle and deal virtual cards without revealing them to others, ensuring fairness and preventing cheating. By employing advanced algorithms, mental poker guarantees privacy and integrity, making online card games secure and trustworthy for players, even in remote settings."
              ghLink="https://github.com/kaif2305/Honeypot-Deception"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rsa}
              isBlog={false}
              title="Chat Client Using RSA and AES"
              description="A chat client employs RSA for secure key exchange and AES for symmetric encryption. It incorporates a dynamic SBox, which changes based on exchanged keys, enhancing encryption strength. RSA ensures secure key sharing, while AES handles efficient data encryption, and the dynamic SBox boosts security by constantly adapting, fortifying the overall communication security."
              ghLink="https://github.com/kaif2305/Seured-chat-using-RSA-and-AES"

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Conference Website"
              description="Technoscape is a global conference website of VIT college which is devloped by me. It's built with React and Node.js, offering an interactive and efficient platform for international conferences. Leveraging these technologies, it ensures a seamless user experience, facilitating information dissemination and engagement for attendees and organizers worldwide."
              ghLink="https://github.com/kaif2305/ts_new"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone Tailwind"
              description="I recreated Netflix's layout with Tailwind CSS and integrated APIs to fetch movie data and trailers. Using Tailwind ensured a visually appealing design, while API calls dynamically loaded movie details and trailers, enhancing user engagement. This project showcased my expertise in front-end development, API integration, and creating an interactive streaming platform."
              ghLink="https://github.com/kaif2305/Netflix-Clone-Tailwind"

            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CFP}
              isBlog={false}
              title="Carbon FootPrint"
              description="The Carbon Footprint Calculator, built with Handlebars, enables individuals to assess their household emissions effortlessly. By inputting data, users can calculate their environmental impact, promoting awareness and sustainable living. This intuitive tool utilizes Handlebars for dynamic content rendering, providing a user-friendly experience while encouraging eco-conscious choices and reducing carbon footprints."
              ghLink="https://github.com/kaif2305/Carbon-FootPrint"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="News Website"
              description="A news website built with Handlebars, a templating engine, dynamically generates web pages. It combines data and templates to deliver content to users. Handlebars simplifies front-end development by allowing designers and developers to create reusable templates and insert dynamic data, resulting in a responsive and efficient news site."
              ghLink="https://github.com/kaif2305/ctg"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
