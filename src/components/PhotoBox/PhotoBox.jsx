import React from 'react';
import styles from './PhotoBox.module.scss';

export const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className={styles.photobox}>
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
