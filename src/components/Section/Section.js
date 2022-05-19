import React from 'react';
import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.sectionMain}>
      <h1>{title}</h1>

      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
