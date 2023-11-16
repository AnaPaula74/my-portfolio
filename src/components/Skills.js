import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Knowledge and hands-on experience in essential technologies such as Git, React, Angular, TypeScript, SCSS, HTML, Node.js
                <br />
                Currently undergoing training in mobile development (Android and Flutter).
              </p>
              <Row className="justify-content-around align-items-center">
                <Col xs={12} md={4} className="item">
                  <img src={meter1} alt="Meter1" style={{ width: '50%', marginBottom: '15px' }} />
                  <h5>Front End Development</h5>
                </Col>
                <Col xs={12} md={4} className="item mt-3 mt-md-0">
                  <img src={meter2} alt="Meter2" style={{ width: '50%', marginBottom: '15px' }} />
                  <h5>Back End Development</h5>
                </Col>
                <Col xs={12} md={4} className="item mt-3 mt-md-0">
                  <img src={meter3} alt="Meter3" style={{ width: '50%', marginBottom: '15px' }} />
                  <h5>Mobile Development</h5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
