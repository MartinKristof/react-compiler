import { memo } from 'react';
import { TProduct } from './types';

// eslint-disable-next-line react/display-name
export const MemoizedFeaturedProducts = memo<{ featuredProducts: TProduct[] }>(({ featuredProducts }) => {
  'use no memo';
  // eslint-disable-next-line no-console
  console.log(featuredProducts);
  return (
    <div className="m-4">
      <h2 className="text-xl">
        Featured List - <span className="text-gray-400">rendered - {Date.now()}</span>
      </h2>
      <ul className="my-2">
        {featuredProducts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
});
