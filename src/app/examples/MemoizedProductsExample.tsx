/* eslint-disable lines-around-directive */
/* eslint-disable react-compiler/react-compiler */
import { FC, useState } from 'react';
import { TProduct } from '../components/Products/types';
import { MemoizedProducts } from '../components/MemoizedProducts/MemoizedProducts';

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
// Show unused no memo
export const MemoizedProductsExample: FC = () => {
  'use no memo';
  const [heading, setHeading] = useState('The Mobile Products');

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl">Memoized Products</h3>
      <MemoizedProducts products={products} heading={heading} setHeading={setHeading} />
    </div>
  );
};
