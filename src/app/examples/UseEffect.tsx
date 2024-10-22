import { useState, useEffect, FC } from 'react';

// Cannot be compiled when bypassing the rule react-hooks/exhaustive-deps
export const UseEffect: FC = () => {
  const [time, setTime] = useState(0);

  const adjustTime = () => {
    setTime(currentTime => currentTime + 1);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Timer component mounted: ${Math.random()}`);
    const interval = setInterval(adjustTime, 1000);
    return () => clearInterval(interval);
  }, [adjustTime]);

  return (
    <div>
      <div>{time} seconds have passed</div>
    </div>
  );
};
