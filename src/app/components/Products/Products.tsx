import { FC } from 'react';
import { ProductList } from './ProductList';
import { Heading } from './Heading';
import { TProduct } from './types';
import { HeadingForm } from './HeadingForm';

export const Products: FC<{
  products: TProduct[];
  heading: string;
  setHeading: (heading: string) => void;
}> = ({ products, heading, setHeading }) => {
  const featuredProducts = products.filter(product => product.featured);
  const totalProducts = products.length;

  return (
    <div className="m-2">
      Products - <span className="text-gray-400">rendered - {Date.now()}</span>
      <Heading heading={heading} totalProducts={totalProducts} />
      <HeadingForm setHeading={setHeading} heading={heading} />
      <ProductList title="Product List" products={products} />
      <ProductList title="Featured List" products={featuredProducts} />
    </div>
  );
};
