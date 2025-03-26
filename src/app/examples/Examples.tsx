import { FC } from 'react';
import { WithData } from './WithData';
import { CounterDoubled } from './CounterDoubled';
import { SortedListMemoized } from './SortedListMemoized';
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
    {/* <UseEffect /> */}
    {/* Show Errors and UseMemoIssue components */}
    {/* <ProductsExample />
    <MemoizedProductsExample /> */}
    {/* <WithHook /> */}
  </>
);
