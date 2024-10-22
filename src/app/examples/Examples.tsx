import { FC } from 'react';
import { Simple } from './Simple';
import { WithData } from './WithData';
import { Counter } from './Counter';
import { CounterDoubled } from './CounterDoubled';
import { SortedListMemoized } from './SortedListMemoized';
import { SortedList } from './SortedList';
import { UseMemoIssue } from './UseMemoIssue';
import { UseEffect } from './UseEffect';
import { ChildRerendering } from './ChildRerendering';
import { ProductsExample } from './ProductsExample';
import { MemoizedProductsExample } from './MemoizedProductsExample';
import { WithHook } from './WithHook';

export const Examples: FC = () => (
  <>
    <Simple />
    {/* <WithData /> */}
    {/* <Counter /> */}
    {/* <CounterDoubled /> */}
    {/* <SortedListMemoized names={['Xor', 'Bar', 'Foo', 'Baz']} /> */}
    {/* <SortedList names={['Xor', 'Bar', 'Foo', 'Baz']} /> */}
    {/* <UseMemoIssue names={['Xor', 'Bar', 'Foo', 'Baz']} /> */}
    {/* <UseEffect /> */}
    {/* Show Errors component */}
    {/* <ChildRerendering /> */}
    {/* <ProductsExample /> */}
    {/* <MemoizedProductsExample /> */}
    {/* <WithHook /> */}
  </>
);
