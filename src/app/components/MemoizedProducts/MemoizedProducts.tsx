'use no memo';

import { memo, useMemo } from 'react';
import { MemoizedProductList } from './MemoizedProductList';
import { MemoizedHeading } from './MemoizedHeading';
import { TProduct } from './types';
import { MemoizedHeadingForm } from './MemoizedHeadingForm';

// eslint-disable-next-line react/display-name
export const MemoizedProducts = memo<{
  products: TProduct[];
  heading: string;
  setHeading: (heading: string) => void;
}>(({ products, heading, setHeading }) => {
  const featuredProducts = useMemo(() => products.filter(product => product.featured), [products]);
  const totalProducts = products.length;
  const now = useMemo(() => Date.now(), []);

  return (
    <div className="m-2">
      Products - <span className="text-gray-400">rendered - {now}</span>
      <MemoizedHeading heading={heading} totalProducts={totalProducts} />
      <MemoizedHeadingForm setHeading={setHeading} heading={heading} />
      <MemoizedProductList title="Product List" products={products} />
      <MemoizedProductList title="Featured List" products={featuredProducts} />
    </div>
  );
});
