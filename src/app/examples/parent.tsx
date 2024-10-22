/* eslint-disable react-compiler/react-compiler */
import { useState, useCallback, memo, FC } from 'react';

const Child: FC<{ updateValue: () => void }> = ({ updateValue }) => {
  // 'use no memo';

  // eslint-disable-next-line no-console
  console.log('Child rerendered');

  return (
    <>
      <p>Child</p>
      <button type="button" onClick={updateValue}>
        Update Child
      </button>
    </>
  );
};

const MemoizedChild = memo(Child);
MemoizedChild.displayName = 'MemoizedChild'; // Setting display name for MemoizedChild will remove the badge of memoization in the React DevTools

export const Parent = () => {
  // 'use no memo';

  const [child, setChild] = useState(0);

  const updateChild = useCallback(() => {
    setChild(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <div>
      <p>Parent - {child}</p>
      <Child updateValue={updateChild} />
      <MemoizedChild updateValue={updateChild} />
    </div>
  );
};
