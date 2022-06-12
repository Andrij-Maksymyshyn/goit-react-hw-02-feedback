import React from 'react';
// import PropTypes from 'prop-types';

import { Box, Button } from './FeedbackOptions.styled';

interface Props {
  options: string[],
  onLeaveFeedback: Function,
}

const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => (
  <Box>
    {options.map(option => (
       <Button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
        </Button>
        
    ))}
  </Box>
);
     


export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
