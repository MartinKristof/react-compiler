import { FC } from 'react';

export const WithData: FC = () => {
  const name = 'Jack';

  return (
    <div>
      <p>Hi: {name}</p>
      <strong>Static Content</strong>
    </div>
  );
};
