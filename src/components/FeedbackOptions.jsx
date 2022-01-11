import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  methodPlusGood,
  methodPlusNeutral,
  methodPlusBad,
}) => (
  <Menu>
    <Item>
      <Button type="button" onClick={methodPlusGood}>
        Good
      </Button>
    </Item>
    <Item>
      <Button type="button" onClick={methodPlusNeutral}>
        Neutral
      </Button>
    </Item>
    <Item>
      <Button type="button" onClick={methodPlusBad}>
        Bad
      </Button>
    </Item>
  </Menu>
);

FeedbackOptions.propTypes = {
  methodPlusGood: PropTypes.func.isRequired,
  methodPlusNeutral: PropTypes.func.isRequired,
  methodPlusBad: PropTypes.func.isRequired,
};
