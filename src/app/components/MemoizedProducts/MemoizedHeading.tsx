import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const MemoizedHeading = memo<{ heading: string; totalProducts: number }>(({ heading, totalProducts }) => {
  'use no memo';
  return (
    <nav>
      <h1 className="text-2xl">
        {heading}({totalProducts}) - <span className="text-gray-400">rendered - {Date.now()}</span>
      </h1>
    </nav>
  );
});
