import React from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Container, TitleSecond, P } from './App.styled';

export class App extends React.Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        (this.state.good + this.state.bad + this.state.neutral)) *
        100,
    );

  plusOneGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  plusOneNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  plusOneBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback" />

        <FeedbackOptions
          methodPlusGood={this.plusOneGood}
          methodPlusNeutral={this.plusOneNeutral}
          methodPlusBad={this.plusOneBad}
        />

        <TitleSecond>Statistics</TitleSecond>

        {this.countTotalFeedback() === 0 ? (
          <P>There is no feedback</P>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}

App.propTypes = {
  state: PropTypes.object,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  plusOneGood: PropTypes.func,
  plusOneNeutral: PropTypes.func,
  plusOneBad: PropTypes.func,
};
