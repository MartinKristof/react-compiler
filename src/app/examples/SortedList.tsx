import { FC } from 'react';

// Show compiled code
export const SortedList: FC<{ names: string[] }> = ({ names }) => {
  const sortedNames = names.toSorted();

  return (
    <ul>
      {sortedNames.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
