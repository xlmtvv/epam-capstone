import React, { useState } from "react";
import styles from "./Panel.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faGraduationCap, faPen, faBriefcase, faPaperPlane, faComment, faGem, faBars, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Panel = ({ onToggle, currentSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); 
  };

  const backButton = () => {
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebar__profile}>
          <img src={require("../../assets/avatar.png")} alt="avatar" />
          <h4>John Doe</h4>
        </div>

        <div className={styles.sidebar__nav}>
          <ul className={styles.sidebar__nav_list}>
            <li className={currentSection === "about-me" ? styles.active : ""} onClick={() => handleScroll("about-me")}>
              <FontAwesomeIcon icon={faUser} />
              <span className={styles.sidebar__nav_list_label}>About me</span>
            </li>
            <li className={currentSection === "education" ? styles.active : ""} onClick={() => handleScroll("education")}>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span className={styles.sidebar__nav_list_label}>Education</span>
            </li>
            <li className={currentSection === "experience" ? styles.active : ""} onClick={() => handleScroll("experience")}>
              <FontAwesomeIcon icon={faPen} />
              <span className={styles.sidebar__nav_list_label}>Experience</span>
            </li>
            <li className={currentSection === "skills" ? styles.active : ""} onClick={() => handleScroll("skills")}>
              <FontAwesomeIcon icon={faGem} />
              <span className={styles.sidebar__nav_list_label}>Skills</span>
            </li>
            <li className={currentSection === "portfolio" ? styles.active : ""} onClick={() => handleScroll("portfolio")}>
              <FontAwesomeIcon icon={faBriefcase} />
              <span className={styles.sidebar__nav_list_label}>Portfolio</span>
            </li>
            <li className={currentSection === "contacts" ? styles.active : ""} onClick={() => handleScroll("contacts")}>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className={styles.sidebar__nav_list_label}>Contacts</span>
            </li>
            <li className={currentSection === "feedback" ? styles.active : ""} onClick={() => handleScroll("feedback")}>
              <FontAwesomeIcon icon={faComment} />
              <span className={styles.sidebar__nav_list_label}>Feedback</span>
            </li>
          </ul>
        </div>

        <button className={styles.goBackButton} onClick={backButton}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Go back</span>
        </button>
      </aside>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Panel;
