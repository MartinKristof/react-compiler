import { memo, useMemo } from 'react';
import { MemoizedProductList } from './MemoizedProductList';
import { MemoizedHeading } from './MemoizedHeading';
import { MemoizedFeaturedProducts } from './MemoizedFeaturedProducts';
import { TProduct } from './types';
import { MemoizedHeadingForm } from './MemoizedHeadingForm';

// eslint-disable-next-line react/display-name
export const MemoizedProducts = memo<{
  products: TProduct[];
  heading: string;
  setHeading: (heading: string) => void;
}>(({ products, heading, setHeading }) => {
  'use no memo';
  const featuredProducts = useMemo(() => products.filter(product => product.featured), [products]);
  const totalProducts = products.length;

  return (
    <div className="m-2">
      Products - <span className="text-gray-400">rendered - {Date.now()}</span>
      <MemoizedHeading heading={heading} totalProducts={totalProducts} />
      <MemoizedHeadingForm setHeading={setHeading} heading={heading} />
      <MemoizedProductList products={products} />
      <MemoizedFeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
});
