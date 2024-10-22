import { useState, useCallback } from 'react';

// Component with state moved down
const IncrementContainer = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(prevState => prevState + 1);
  }, []);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
};

const Child = () => {
  // eslint-disable-next-line no-console
  console.log('Child rendered');
  return <div>Child</div>;
};

export const CompositionPattern = () => (
  <div>
    <IncrementContainer />
    <Child />
  </div>
);
