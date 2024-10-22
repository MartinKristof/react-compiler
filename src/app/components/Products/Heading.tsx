import { FC } from 'react';

export const Heading: FC<{ heading: string; totalProducts: number }> = ({ heading, totalProducts }) => (
  <nav>
    <h1 className="text-2xl">
      {heading}({totalProducts}) - <span className="text-gray-400">rendered - {Date.now()}</span>
    </h1>
  </nav>
);
