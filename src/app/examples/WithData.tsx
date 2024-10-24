import { FC } from 'react';

// Show compiled code
export const WithData: FC = () => {
  const name = 'John Doe';

  return (
    <div>
      <p>Hi: {name}</p>
      <strong>Static Content</strong>
    </div>
  );
};
