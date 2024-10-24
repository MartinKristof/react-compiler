import { ChangeEvent, useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';

// Add use no memo
export const WithHook = () => {
  // use no memo
  const [searchParam, setSearchParam] = useState('');
  const { data, loading, getData, setData } = useApi();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };

  useEffect(() => {
    const searchPosts = async (term: string) => {
      if (!term.trim()) {
        setData([]);

        return;
      }

      await getData(term);
    };
    searchPosts(searchParam);
  }, [getData, searchParam, setData]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl">With Hook</h3>
      <div className="m-2">
        <label htmlFor="search">
          Search:
          <input
            id="search"
            type="text"
            value={searchParam}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <div className="m-2">
        {loading && <p>Loading...</p>}
        <ul>
          {data.map(({ id, title, body }) => (
            <li key={id} className="m-2">
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
