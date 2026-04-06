import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Mypic from "../../Assets/mypic.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a freelance <i><b className="purple">full-stack developer</b></i>{" "}
              helping businesses, startups, and individuals turn ideas into
              polished digital products. I specialize in{" "}
              <i><b className="purple">Web Development, App Development, and Custom Software Solutions</b></i>{" "}
              that are modern, scalable, and user-friendly.
              <br />
              <br />
              I work with technologies like <b className="purple">React.js</b>,{" "}
              <b className="purple">Node.js</b>, and JavaScript to build
              responsive websites, business applications, and custom systems
              that solve real problems and support growth.
              <br />
              <br />
              Along with development, I also help brands with{" "}
              <i><b className="purple">Digital Marketing and Social Media Management</b></i>,
              creating a stronger online presence with the right strategy and
              execution. My goal is to deliver solutions that look
              professional, perform smoothly, and create real value for every
              client.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Mypic} className="img-fluid" id="mypic" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            {/* hello */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Lalanchaudhary"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/lalan0404?t=QYf2cVKfsz6mqYqbRpeLeQ&s=08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lalan-chaudhary-066177252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_yaashhh_04/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
