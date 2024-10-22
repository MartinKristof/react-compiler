import { FC } from 'react';
import { TProduct } from './types';

export const ProductList: FC<{ title: string; products: TProduct[] }> = ({ title, products }) => (
  <div className="m-4">
    <h2 className="text-xl">
      {title} - <span className="text-gray-400">rendered - {Date.now()}</span>
    </h2>
    <ul className="my-2">
      {products.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </div>
);
