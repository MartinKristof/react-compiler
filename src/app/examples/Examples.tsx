import { FC } from 'react';
import { WithData } from './WithData';
import { CounterDoubled } from './CounterDoubled';
import { SortedListMemoized } from './SortedListMemoized';
import { SortedList } from './SortedList';
import { UseEffect } from './UseEffect';
import { ChildRerendering } from './ChildRerendering';
import { ProductsExample } from './ProductsExample';
import { MemoizedProductsExample } from './MemoizedProductsExample';
import { WithHook } from './WithHook';

export const Examples: FC = () => (
  <>
    <WithData />
    {/* <CounterDoubled /> */}
    {/* <SortedListMemoized names={['Xor', 'Bar', 'Foo', 'Baz']} /> */}
    {/* <SortedList names={['Xor', 'Bar', 'Foo', 'Baz']} /> */}
    {/* <UseEffect /> */}
    {/* Show Errors component */}
    {/* <ChildRerendering /> */}
    {/* <ProductsExample />
    <MemoizedProductsExample /> */}
    {/* <WithHook /> */}
  </>
);
