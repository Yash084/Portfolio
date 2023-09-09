import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import social from "../../Assets/Projects/social.png";
import weather from "../../Assets/Projects/weather.png";
import task from "../../Assets/Projects/task.png";
import doc from "../../Assets/Projects/doc.png";
import travel from "../../Assets/Projects/travel.png";
import finance from "../../Assets/Projects/finance.png";

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc}
              isBlog={false}
              title="Doctor Appointment System"
              description="Doctor Appointment System is a MERN Stack web application which provides a platform to user to book appointments with the doctor by sitting at their home. The doctor can approve or reject appointments. Users can also apply for doctor which is approved or rejected by the admin."
              ghLink="https://github.com/Yash084/Doctor-Appointment-System"
              demoLink="https://yash-doctor-appointment-system.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="FinanceTrackerX"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Yash084/FinanceTrackerX"
              demoLink="https://yash-finance-tracker.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Yash084/Task-Manager"
              demoLink="https://task-manager-yash-f32f83.netlify.app/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="SocialHub"
              description="SocialHub is a social media web application built using React.js and firebase. User can follow other users to see ,like and comment on their posts. The owner user of the post can also reply to comment on post and edit their profile and posts."
              ghLink="https://github.com/Yash084/SocialHub"
              demoLink="https://yash-socialhub-c642b1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Planner"
              description="Travel Planner is a web applictaion built using React js and rapid api which allows user to see the restraunts and attraction of any place by just knowing location."
              ghLink="https://github.com/Yash084/Travel-Planner"
              demoLink="https://travel-planner-yash-163ef1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Web Application"
              description="This is a basic project built using HTML, CSS and vanilla JavaScript and uses weather api to get the details of weather of a place by entering location."
              ghLink="https://github.com/Yash084/Weather-Web-Application"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
