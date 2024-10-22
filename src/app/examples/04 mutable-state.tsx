import { useState } from 'react';

export const MutableState = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [name, setName] = useState('Jack');

  return (
    <div>
      <p>Hi: {name}</p>
      <strong>Mutable State</strong>
    </div>
  );
};
