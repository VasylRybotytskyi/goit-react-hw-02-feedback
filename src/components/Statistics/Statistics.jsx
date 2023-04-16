import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const feedbackGiven = total > 0;
    return (
      <>
        <h2>Statistics</h2>
        {feedbackGiven ? (
          <div>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {positivePercentage}%</span>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
