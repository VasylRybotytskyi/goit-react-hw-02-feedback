import styled from 'styled-components';

export const FeedbackButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonGood = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    border-color: rgb(0, 255, 0);
  }
`;
export const ButtonNeutral = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    border-color: rgb(255, 255, 102);
  }
`;
export const ButtonBad = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    border-color: rgb(255, 0, 0);
  }
`;
