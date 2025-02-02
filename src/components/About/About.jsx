import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Timeline from './Timeline'
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = (props) => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const togglePanelButton = () =>{
    if (!visible) {
      return <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-btn--view-more"
        onClick = {() => setVisible(!visible)}
        >View More</a>
    } else {
      return <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-btn--view-more"
        onClick = {() => setVisible(!visible)}
        >Show Less</a>
    }
  }


  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree}
                </p>
                  <span className="d-flex mt-3">
                      {togglePanelButton()}
                  </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      {visible &&
        <Timeline />
      }
    </section>
  );
};

export default About;
