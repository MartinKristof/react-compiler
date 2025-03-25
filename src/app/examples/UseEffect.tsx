import { useState, useEffect, FC } from 'react';

// Show compiled code
// Remove "use no memo" and add useCallback to adjustTime
// Cannot be compiled when we bypass the rule react-hooks/exhaustive-deps or other rules of react!
export const UseEffect: FC = () => {
  // "use no memo";

  const [time, setTime] = useState(0);

  // ESLint bug
  const adjustTime = () => {
    setTime(currentTime => currentTime + 1);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Timer component mounted: ${Math.random()}`);
    const interval = setInterval(adjustTime, 1000);
    return () => clearInterval(interval);
  }, [adjustTime]);
  // called only on mount

  return (
    <div>
      <div>{time} seconds have passed</div>
    </div>
  );
};
