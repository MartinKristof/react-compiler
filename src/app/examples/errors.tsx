/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useRef, useState } from 'react';

const Ref = () => {
  const ref = useRef(null);
  const value = ref.current;
  return value;
};

const MutationOfState: FC<{ foo: string }> = ({ foo }) => {
  const [state, setState] = useState({ a: 0 });
  state.a = 1;
  return <div>{foo}</div>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MutationOfProps: FC<{ a: any; c: any }> = ({ a, c }) => {
  a.b = 2;
  return <div>{c}</div>;
};

const ReassignConst: FC = () => {
  const [state1, setState1] = useState('test');
  // eslint-disable-next-line no-const-assign
  state1 = 'John';

  return <div>Hi</div>;
};

let count = 0;
const ReassignOutterVar: FC = () => {
  // eslint-disable-next-line lines-around-directive
  'use no memo'; // Could be removed and still works
  count += 1;
  return <div>Hello world {count}</div>;
};

const UnusedNoMemo = () => {
  'use no memo'; // Unused directive

  return <div>Hello world</div>;
};
