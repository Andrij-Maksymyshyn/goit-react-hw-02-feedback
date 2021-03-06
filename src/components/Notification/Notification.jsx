import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Notification.styled';

// interface Props {
//   message: string,
// }

const Notification = ({ message }) => <P>{message}</P>;

export default Notification;

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};
