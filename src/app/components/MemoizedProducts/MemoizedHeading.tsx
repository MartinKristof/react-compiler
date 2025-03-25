'use no memo';

import { memo, useMemo } from 'react';

// eslint-disable-next-line react/display-name
export const MemoizedHeading = memo<{ heading: string; totalProducts: number }>(({ heading, totalProducts }) => {
  const now = useMemo(() => Date.now(), []);

  return (
    <nav>
      <h1 className="text-2xl">
        {heading}({totalProducts}) - <span className="text-gray-400">rendered - {now}</span>
      </h1>
    </nav>
  );
});
