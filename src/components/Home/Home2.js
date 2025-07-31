import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
  I'm a passionate software developer driven by curiosity and a commitment to innovation. Proficient in <i><b className="purple">C++,JAVA and JavaScript</b></i>, I thrive on building meaningful solutions through <i><b className="purple">Web Technologies</b></i> and exploring the frontiers of <i><b className="purple">AI and Machine Learning</b></i>.
  <br />
  <br />
  I love transforming ideas into reality using tools like <b className="purple">Node.js</b> and modern frameworks such as <i><b className="purple">React.js</b></i>. Every project is a new opportunity to create something impactful and user-focused.
  <br />
  <br />
  Let's connect and innovate together — because every line of code is a step toward a smarter future.
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
