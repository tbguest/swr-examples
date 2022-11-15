import { useEffect, useState } from "react";

export function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("/api/route");
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return <>{!loading && <Component data={data} />}</>;
}

//

// import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const cache = useRef({});
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (cache.current[url]) {
        setData(cache.current[url]);
        setLoading(false);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data;
        setData(data);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export function Appp() {
  const { data, loading } = useFetch("/api/route");
  return <>{!loading && <Component data={data} />}</>;
}

const Component = (data) => {
  return <></>;
};
//

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function App() {
  const { data, error } = useSWR("/api/route", fetcher);
  return <>{!error && <Component data={data} />}</>;
}

//

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useFetch = (url) => {
  const { data, error } = useSWR("/api/user", fetcher);
  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export function App() {
  const { data: user } = useSWR("/api/user", fetcher);
  const { data: data } = useSWR("/api/user/data", fetcher);

  if (data) return <div>failed to load</div>;
  if (user) return <div>loading...</div>;

  return (
    <>
      <p>Hi, {user.name}!</p>
      <Component data={data} />;
      <Component data={data} />;
      <Component data={data} />;
    </>
  );
}

//

const useData = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};

function Appppp() {
  const { data: userData, ...status1 } = useData("/api/user");
  const { data: userPosts, ...status2 } = useData("/api/posts");
  return (
    <div className="App">
      {!error && <p>{data}</p>}
      ...
      <Card />
      <Card />
    </div>
  );
}
//

const CardGrid = ({ data, loading, error, mutate }) => {
  // optimistic UI
  mutate(updatedList, false);
  removeRepoFromDocument(id, session);
  mutate();
};

export { CardGrid };


//

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function App() {
 const { data, error, mutate } = useSWR("/api/user", fetcher);

 return <>{!error && <Component data={data} />}</>;


