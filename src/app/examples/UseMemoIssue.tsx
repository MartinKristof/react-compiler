import { useState, useMemo, FC } from 'react';

// Cannot be compiled
export const UseMemoIssue: FC<{ names: string[] }> = ({ names }) => {
  const [newNames, setNewNames] = useState<string[]>(names);

  useMemo(() => {
    setNewNames(names);
  }, [names]);

  const sortedNames = newNames.toSorted();

  return (
    <ul>
      {sortedNames.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
