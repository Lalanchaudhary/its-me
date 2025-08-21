import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ptuwebsite from "../../Assets/eggless.png";
import childmindwell from "../../Assets/Projects/childmindwell.png";
import convertify from "../../Assets/Projects/convertify.png";
import School from "../../Assets/school.png";
import Sprint from "../../Assets/sprint.png";
import Devbharal from "../../Assets/Projects/devbharal.png";
import RatemyTutor from "../../Assets/Projects/elevate.png";
import MargDarshi from "../../Assets/Projects/invoice.png";
function Projects() {
  const html =
    "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white";
  const css =
    "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white";
  const js =
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E";
  const react =
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB";
  const tailwindcss =
    "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white";
  const bootstrap =
    "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white";
  const node =
    "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white";
  const express =
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB";
  const mongo =
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white";
  const firebase =
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase";
  const canva =
    "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white";
  const restapi =
    "https://img.shields.io/badge/REST_API-%234F4F4F.svg?style=for-the-badge&logo=rest-api&logoColor=white";
  const postman =
    "https://img.shields.io/badge/Postman-%234F4F4F.svg?style=for-the-badge&logo=postman&logoColor=red";
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
              imgPath={ptuwebsite}
              techStack={[
                react,
                express,
                mongo,
                node,
                firebase,
                tailwindcss,
                postman,
                restapi,
                canva,
              ]}
              isBlog={false}
              title="Ecommerce Website"
              description="Developed a full-featured Cake Bakery E-Commerce Platform with a user web app, admin panel (web + React Native), and GPS-enabled delivery app, featuring Firebase auth, wallet system, and real-time order management.
              Implemented ₹150 wallet bonus on signup, dynamic shipping charges via live GPS, and smooth order placement with confirmation animations.
              Enabled admins to manage products, users, and assign orders instantly, with real-time push notifications and efficient delivery tracking."
              ghLink="https://github.com/Lalanchaudhary/EgglessCake"
              demoLink="https://www.egglesscakes.in"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MargDarshi}
              techStack={[
                react,
                express,
                firebase,
                node,
                tailwindcss,
                postman,
                restapi,
                canva,
              ]}
              isBlog={false}
              title="Invoice Generator"
              description="The Invoice Generator is a full-stack web application built using the MERN stack, designed to simplify the process of creating and managing professional invoices. Users can input client details, add items with quantity and rates, apply taxes or discounts, and the app automatically calculates the total amount in real-time. It also allows users to download invoices as PDFs and manage previous billing records efficiently. With a clean, responsive interface and smooth user experience, the app is ideal for freelancers and small businesses looking for a simple yet powerful billing solution."
              ghLink="https://github.com/Lalanchaudhary/invoiced"
              demoLink="https://invoiced-pied.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RatemyTutor}
              techStack={[
                react,
                express,
                mongo,
                node,
                tailwindcss,
                postman,
                restapi,
                canva,
              ]}
              isBlog={false}
              title="ELEVATE 2024"
              description="This College Event Website is a visually engaging and interactive platform designed to promote and manage campus events. Built with modern web technologies, the site features 3D animations and smooth transitions to create an immersive browsing experience that captures attention and reflects the excitement of college life. It includes a dedicated registration page where attendees can easily sign up for events, ensuring a seamless user experience from discovery to participation. The website combines creative design with functional elements to deliver both aesthetic appeal and practical utility for students and organizers alike."
              ghLink="https://github.com/abhi19772022/portfolio-nextjs-aceternity"
              demoLink="https://elevate.theuniques.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convertify}
              techStack={[
                html,
                css,
                tailwindcss,
                js,
                canva,
                firebase,
                restapi,
                postman,
              ]}
              isBlog={false}
              title="Convertify"
              description="Users can seamlessly convert various file formats with ease, from images to documents and beyond, thanks to this innovative platform. Its intuitive interface and robust functionality cater to users of all backgrounds, streamlining their workflows and enhancing productivity. Explore a new realm of efficiency and simplicity in file transformation, setting new standards for digital innovation."
              ghLink=""
              demoLink="https://convertifyy.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
