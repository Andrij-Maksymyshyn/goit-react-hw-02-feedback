import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title }) => <Title>{title}</Title>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
