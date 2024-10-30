'use no memo';

import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const MemoizedHeading = memo<{ heading: string; totalProducts: number }>(({ heading, totalProducts }) => (
  <nav>
    <h1 className="text-2xl">
      {heading}({totalProducts}) - <span className="text-gray-400">rendered - {Date.now()}</span>
    </h1>
  </nav>
));
