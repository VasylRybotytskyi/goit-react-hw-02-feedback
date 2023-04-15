import React from 'react';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBadClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <>
        <div>Please leave feedback</div>
        <button type="button" onClick={this.handleGoodClick}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
      </>
    );
  }
}
