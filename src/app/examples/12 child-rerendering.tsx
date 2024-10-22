import { useState } from 'react';

// No more unnecessary child re-rendering!

const Child = () => {
  // eslint-disable-next-line no-console
  console.log('Child rendered');
  return <div>Child</div>;
};

// const MemoizedChild = memo(Child);

export const ChildRerendering = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <Child />
      {/* <MemoizedChild /> */}
    </div>
  );
};
