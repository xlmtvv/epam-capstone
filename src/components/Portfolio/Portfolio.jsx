import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import './Portfolio.scss';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope('.project-grid', {
      itemSelector: '.project-card',
      layoutMode: 'fitRows'
    });

    return () => {
      isotope.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      if (selectedCategory === 'all') {
        isotope.current.arrange({ filter: '*' });
      } else {
        isotope.current.arrange({ filter: `.${selectedCategory}` });
      }
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="filter-buttons">
        <button onClick={() => handleCategoryChange('all')}>All / </button>
        <button onClick={() => handleCategoryChange('UI')}>&nbsp;UI / </button>
        <button onClick={() => handleCategoryChange('Code')}>&nbsp;Code</button>
      </div>
      <div className="project-grid">
        {portfolioData.map((project) => (
          <div key={project.id} className={`project-card ${project.category}`}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const portfolioData = [
  { 
    id: 1, 
    title: "Project 1", 
    category: "UI", 
    image: require('../../assets/portfolio1.jpg'), 
    description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    link: "#"
  },
  { 
    id: 2, 
    title: "Project 2", 
    category: "UI", 
    image: require('../../assets/portfolio1.jpg'), 
    description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    link: "#"
  },
  { 
    id: 3, 
    title: "Project 3", 
    category: "Code", 
    image: require('../../assets/portfolio2.png'), 
    description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    link: "#"
  },
  { 
    id: 4, 
    title: "Project 4", 
    category: "Code", 
    image: require('../../assets/portfolio2.png'), 
    description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    link: "#"
  },
];

export default Portfolio;
