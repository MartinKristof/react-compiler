import { FC, useMemo } from 'react';

export const InterMixedSortedList: FC<{ names: string[] }> = ({ names }) => {
  const sortedNames = useMemo(() => names.toSorted(), [names]);

  return (
    <ul>
      {sortedNames.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export const Header = () => (
  <header>
    <h1>My App</h1>
  </header>
);
