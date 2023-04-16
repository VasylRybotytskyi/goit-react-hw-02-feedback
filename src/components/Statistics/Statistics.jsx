import React from 'react';
export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <h2>Statistics</h2>
        <span>Good:{good}</span>
        <span>Neutral:{neutral}</span>
        <span>Bad:{bad}</span>
        <span>Total:{total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
      </>
    );
  }
}
