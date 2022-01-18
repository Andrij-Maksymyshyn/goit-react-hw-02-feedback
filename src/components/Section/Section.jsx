import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
