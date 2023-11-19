import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = ["Software Engineer", "Full Stack Developer"];

  const tick = useCallback(() => {
    let i = toRotate.length > 0 ? toRotate.length - 1 : 0;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [text, isDeleting, delta, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  const handleDownload = () => {
    const cvLink = "https://drive.google.com/file/d/1H99iTZjsh84pJIHB2ddCA690A8jkIp2O/view?usp=sharing";
    const link = document.createElement('a');
    link.href = cvLink;
    link.download = 'Ana_Paula_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    {`Hey! I'm Ana`}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Engineer", "Full Stack Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    I have knowledge and hands-on experience in essential technologies such as Git, React, Angular, TypeScript, SCSS, HTML, and Node.js. I have demonstrated proficiency in creating and operating custom chatbots, particularly in contexts related to administrative and financial applications.
                    <br />My eagerness to learn and grow is matched by my commitment to quality and efficiency. I approach challenges with enthusiasm and maintain a proactive attitude, always seeking innovative solutions to contribute effectively.
                  </p>
                  <button className="tagline" onClick={handleDownload}>Download CV</button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
