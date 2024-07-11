import React from 'react';
import styles from './Box.module.scss';

export const Box = ({ title, content }) => {
  return (
    <div className={styles.box}>
      <h2 className={styles.box__title}>{title}</h2>
      <p className={styles.box__content}>{content}</p>
    </div>
  );
};



