import React from 'react';
import styles from './Expertise.module.scss';

export const Expertise = ({ data }) => {
  return (
    <div className={styles.expertise}>
      <h2>Experience</h2>
      <ul className={styles.experience__list}>
        {data.map((exp, index) => (
          <li key={index} className={styles.experience__item}>
            <div className={styles.company__info}>
              <h3 className={styles.company}>{exp.info.company}</h3>
              <p className={styles.date}>{exp.date}</p>

            </div>
            <div className={styles.experience__details}>
              <p className={styles.job}>{exp.info.job}</p>
              <p className={styles.description}>{exp.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

