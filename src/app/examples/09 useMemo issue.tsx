import { useState, useMemo, FC } from 'react';

export const UseMemoIssue: FC<{ names: string[] }> = ({ names }) => {
  const [newNames, setNewNames] = useState<string[]>(names);

  useMemo(() => {
    // Try to bypass the linter the rule -> the compiler will not applied
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
