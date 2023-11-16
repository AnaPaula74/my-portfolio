import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: projImg1,
    },
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: projImg2,
    },
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: projImg3,
    },
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: projImg1,
    },
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: projImg2,
    },
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have completed several projects as part of courses and bootcamps, gaining practical skills and applying the knowledge acquired in real-world scenarios. These projects span various areas, showcasing my ability to apply theoretical concepts to practical and real projects.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};
