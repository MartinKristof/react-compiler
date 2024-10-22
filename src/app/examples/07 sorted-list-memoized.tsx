import { FC, useMemo } from 'react';

export const SortedListMemoized: FC<{ names: string[] }> = ({ names }) => {
  const sortedNames = useMemo(() => names.toSorted(), [names]);

  return (
    <ul>
      {sortedNames.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};