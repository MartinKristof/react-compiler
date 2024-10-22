import { FC } from 'react';
import { TProduct } from './types';

export const FeaturedProducts: FC<{ featuredProducts: TProduct[] }> = ({ featuredProducts }) => {
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
};
