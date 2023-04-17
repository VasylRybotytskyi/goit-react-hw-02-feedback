import styled from 'styled-components';

export const FeedbackButton = styled.button`
  display: flex;
  gap: 8px;
  border: none;
`;

export const ButtonGood = styled.button`
  cursor: pointer;

  border-radius: 5px;
  &:hover {
    border-color: rgb(0, 255, 0);
  }
`;
export const ButtonNeutral = styled.button`
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    border-color: rgb(255, 255, 102);
  }
`;
export const ButtonBad = styled.button`
  cursor: pointer;

  border-radius: 5px;
  &:hover {
    border-color: rgb(255, 0, 0);
  }
`;
