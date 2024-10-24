import { useState, useMemo, FC } from 'react';

// Show compiled code
export const CounterDoubled: FC = () => {
  const [count, setCount] = useState(0);

  const doubledCount = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Count: {doubledCount}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
