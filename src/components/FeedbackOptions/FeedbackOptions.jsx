import React from 'react';

export const FeedbackOptions = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => {
  return (
    <>
      <button type="button" onClick={onGoodClick}>
        Good
      </button>
      <button type="button" onClick={onNeutralClick}>
        Neutral
      </button>
      <button type="button" onClick={onBadClick}>
        Bad
      </button>
    </>
  );
};