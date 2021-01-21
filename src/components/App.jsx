import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';
import About from './About/About';
import Timeline from './About/Timeline';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { navigationData, heroData, aboutData, timelinesData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [navigation, setNavigation] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [timelines, setTimeline] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavigation({ ...navigationData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setTimeline([...timelinesData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ navigation, hero, about, timelines, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
