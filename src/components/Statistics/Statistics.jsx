import React from 'react';
import { Notification } from 'components/Notification/Notification';

export class Statistics extends React.Component {
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
