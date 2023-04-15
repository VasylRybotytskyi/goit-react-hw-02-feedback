import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Statistics state={{ good: 0, neutral: 0, bad: 0 }} />
    </>
  );
};
