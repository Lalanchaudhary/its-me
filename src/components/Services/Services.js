import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaBullhorn,
  FaHashtag,
} from "react-icons/fa";
import Particle from "../Particle";

const services = [
  {
    title: "Web Development",
    icon: FaLaptopCode,
    description:
      "Responsive, modern websites and web applications built for speed, usability, and business growth.",
    highlights: [
      "Business websites and landing pages",
      "Frontend and full-stack web apps",
      "Performance-focused responsive design",
    ],
  },
  {
    title: "App Development",
    icon: FaMobileAlt,
    description:
      "Mobile app experiences designed to help users interact with your brand smoothly on the go.",
    highlights: [
      "Cross-platform application development",
      "User-friendly mobile interfaces",
      "Feature-rich apps for real-world use cases",
    ],
  },
  {
    title: "Custom Software Development",
    icon: FaCogs,
    description:
      "Tailored digital solutions built around your workflow, business model, and long-term product goals.",
    highlights: [
      "Custom dashboards and admin panels",
      "Business process automation",
      "Scalable solutions for unique requirements",
    ],
  },
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
    description:
      "Digital campaigns and brand messaging designed to improve visibility, engagement, and conversions.",
    highlights: [
      "Campaign strategy and creative support",
      "Lead generation focused execution",
      "Content planning for online growth",
    ],
  },
  {
    title: "Social Media Management",
    icon: FaHashtag,
    description:
      "Consistent social media support to help brands stay active, recognizable, and connected with their audience.",
    highlights: [
      "Content scheduling and posting",
      "Brand-aligned audience engagement",
      "Platform presence and profile management",
    ],
  },
];

function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Services</strong>
        </h1>
        <p className="services-copy">
          I help businesses and founders turn ideas into polished digital
          products and strong online presence.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Col md={4} className="project-card" key={service.title}>
                <Card className="project-card-view service-card-view">
                  <Card.Body>
                    <div className="service-icon-wrap">
                      <Icon className="service-icon" />
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
                    <ul className="service-highlight-list">
                      {service.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
