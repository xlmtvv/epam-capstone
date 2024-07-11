import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ icon, text, onClick }) => {
  return (
    <button className="cv-button" onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  );
};

