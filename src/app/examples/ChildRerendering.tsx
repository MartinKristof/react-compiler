/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, memo, useCallback, useState } from 'react';

// Alternatively solved by Composition Pattern - Move the state down (to new component IncrementContainer)
// Remove use no memo, memo, and useCallback to see the difference
const Child: FC<{ updateValue: () => void }> = ({ updateValue }) => {
  // 'use no memo'; // Remove this line to see the difference
  // eslint-disable-next-line no-console
  console.log('Child rendered');
  return (
    <div>
      <p>Child</p>
      <button type="button" onClick={updateValue}>
        Increment
      </button>
    </div>
  );
};

const MemoizedChild = memo(Child); // Remove this line to see the difference
// Setting display name for MemoizedChild will remove the badge of memoization in the React DevTools
MemoizedChild.displayName = 'MemoizedChild';

export const ChildRerendering = () => {
  // 'use no memo'; // Remove this line to see the difference
  const [count, setCount] = useState(0);

  // const memoizedIncrement = useCallback(() => {
  //   setCount(prevState => prevState + 1);
  // }, []);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Child updateValue={increment} />
      {/* <MemoizedChild updateValue={memoizedIncrement} /> */}
    </div>
  );
};
