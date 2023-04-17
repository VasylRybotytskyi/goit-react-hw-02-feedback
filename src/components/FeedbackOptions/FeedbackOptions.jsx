import React from 'react';
import {
  ButtonBad,
  ButtonGood,
  ButtonNeutral,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => {
  return (
    <FeedbackButton>
      <ButtonGood type="button" onClick={onGoodClick}>
        Good
      </ButtonGood>
      <ButtonNeutral type="button" onClick={onNeutralClick}>
        Neutral
      </ButtonNeutral>
      <ButtonBad type="button" onClick={onBadClick}>
        Bad
      </ButtonBad>
    </FeedbackButton>
  );
};
