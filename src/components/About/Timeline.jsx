import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import TimelineImg from '../Image/TimelineImg';
import PortfolioContext from '../../context/context';

const Timeline = () => {
  const { timelines } = useContext(PortfolioContext);

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

  return (
    <Container>
        <Title title="Timeline" />
        <Row className="timeline-wrapper">
            <div className="col-lg-12">
                <ul className="timeline">
                    {   
                        timelines.map((timeline) => {
                        const { id, time, heading, img, description, count } = timeline;
                        return (
                        <Fade key={id} left={isDesktop && !(count % 2 == 0)} bottom={isMobile && !(count % 2 == 0)} right={isDesktop && (count % 2 == 0)} top={isMobile && (count % 2 == 0)} duration={1000} delay={600} distance="30px">
                            <li key={id} className= {count % 2 ? "" : "timeline-inverted"}>
                                <div className="timeline-image">
                                <TimelineImg alt="" filename={img} />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>{time}</h4>
                                        <h5 className="subheading">{heading}</h5>
                                    </div>
                                    <div className="timeline-body">
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Fade>
                        );
                    })}
                    <Fade right={isDesktop} top={isMobile} duration={1000} delay={600} distance="30px">
                        <li>
                            <div className="timeline-image">
                                <h4> And More
                                    <br />To Come
                                    <br />In the Future
                                </h4>
                            </div>
                        </li>
                    </Fade>
                </ul>
            </div>
        </Row>
    </Container>
  );
};

export default Timeline;
