import { useState } from 'react';

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useApi = () => {
  const [data, setData] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async (searchParam: string) => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchParam}`);
    const json = (await response.json()) as TPost[];

    setData(json);
    setLoading(false);
  };

  return { loading, data, getData, setData };
};
