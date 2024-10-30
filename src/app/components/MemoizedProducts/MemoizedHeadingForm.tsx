'use no memo';

import { ChangeEvent, memo } from 'react';

// eslint-disable-next-line react/display-name
export const MemoizedHeadingForm = memo<{ heading: string; setHeading: (heading: string) => void }>(
  ({ heading, setHeading }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHeading(event.target.value);
    };

    return (
      <div className="m-2">
        <p>
          HeadingForm - <span className="text-gray-400">rendered - {Date.now()}</span>
        </p>
        <label htmlFor="heading">
          Heading:
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
      </div>
    );
  },
);
