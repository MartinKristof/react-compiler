import { useState } from 'react';
import { Products } from '../components/Products/Products';
import { TProduct } from '../components/Products/types';

const products: TProduct[] = [
  {
    id: '001',
    name: 'iPhone 12',
    featured: true,
  },
  {
    id: '002',
    name: 'Samsung Galaxy S21',
    featured: false,
  },
  {
    id: '003',
    name: 'Vivo V20',
    featured: false,
  },
  {
    id: '004',
    name: 'Oppo F17',
    featured: true,
  },
];
export const ProductExample = () => {
  const [heading, setHeading] = useState('The Mobile Products');

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl">Products</h3>
      <Products products={products} heading={heading} setHeading={setHeading} />
    </div>
  );
};
