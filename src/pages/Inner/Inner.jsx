import React, { useState, useEffect, useRef } from "react";
import { Box } from "../../components/Box/Box";
import { Expertise } from "../../components/Expertise/Expertise";
import Portfolio from "../../components/Portfolio/Portfolio";
import Adress from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";
import Panel from "../../components/Panel/Panel";
import Timeline from "../../components/Timeline/Timeline";
import styles from "./Inner.module.scss";
import { TopButton } from "../../components/TopButton/TopButton";
import Skills from '../../components/Skills/Skills';

export function Inner() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentSection, setCurrentSection] = useState("about-me");

  const sections = useRef([]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const validSections = sections.current.filter(Boolean);

    validSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      validSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleToggle = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  const marginLeft =
    screenWidth < 600 ? (sidebarOpen ? "15vw" : 0) : sidebarOpen ? "21vw" : 0;

  return (
    <div className={styles.innerContainer}>
      <Panel onToggle={handleToggle} currentSection={currentSection} />
      <div className={styles.mainContent} style={{ marginLeft }}>
        <div id="about-me" ref={(el) => (sections.current[0] = el)}>
          <Box
            title="About me"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt saepe provident cupiditate illum. 
              Modi eum repellendus quos iste eius incidunt perferendis quasi ad et minima, possimus itaque, suscipit voluptatibus!
              Impedit sint voluptatibus quo odit! Harum odio fuga rem alias enim, optio voluptates est similique doloribus totam veritatis corrupti, 
              autem tempore quasi culpa accusantium numquam repellendus! Maiores modi quas unde!"
          />
        </div>
        <div id="education" ref={(el) => (sections.current[1] = el)}>
          <Timeline data={timelineData} />
        </div>
        <div id="experience" ref={(el) => (sections.current[2] = el)}>
          <Expertise data={experienceData} />
        </div>
        <div id="skills" ref={(el) => (sections.current[3] = el)}>
          <Skills props={skills} />
        </div>
        <div id="portfolio" ref={(el) => (sections.current[4] = el)}>
          <Portfolio />
        </div>
        <div id="contacts" ref={(el) => (sections.current[5] = el)}>
          <Adress />
        </div>
        <div id="feedback" ref={(el) => (sections.current[6] = el)}>
          <Feedback />
        </div>
      </div>
      <TopButton />

    </div>
  );
}

const timelineData = [
  {
    date: 2001,
    title: "Title 0",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
  },
  {
    date: 2000,
    title: "Title 1",
    text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
  },
  {
    date: 2012,
    title: "Title 2",
    text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
  },
];

const experienceData = [
  {
    date: "2013-2014",
    info: {
      company: "Google",
      job: "Front-end developer / php programmer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  },
  {
    date: "2012",
    info: {
      company: "Twitter",
      job: "Web developer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  },
];



const skills = [
  { type: 'Java', level: 100 },
  { type: 'React', level: 85 },
  { type: 'Javascript', level: 75 },
  { type: 'Spring', level: 50 },
  { type: 'Docker', level: 25 },
  { type: 'HTML', level: 20 },
  { type: 'NoSQL', level: 0 }
];