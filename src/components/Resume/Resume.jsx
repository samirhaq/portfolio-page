import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import ResumeImg from '../Image/ResumeImg';
import { Document } from 'react-pdf';
import resumeName from './Samir_Haq_Resume.pdf';

const Resume = () => {
  const { resume } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return (
    <section id="resume">
      <Container>
        <Title title="Resume" />
        <Row className="resume-wrapper">
        <Fade right={isDesktop} top={isMobile} duration={1000} delay={1000} distance="30px">
        <Document file={resumeName}></Document>
              <a href={resumeName}>
              <button class="btn btn-secondary" type="button">
              Download Resume</button>
              </a>
        </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
