import useSWR from "swr";
import classes from "../../styles/Home.module.css";
import { useRef, useEffect, useState } from "react";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const WithSWR = ({ url, opts }) => {
  const [updated, setUpdated] = useState(false);
  const { data, error } = useSWR(url, fetcher, opts);
  const dataRef = useRef(data);

  // can I flash a different colour if it's a cache hit vs a fetch via server?
  // - try using swrConfig and accessing the cache? (need to grab a screenshot of this anyway)
  // what about fetches from http cache vs server?

  const colorTimeout = () => {
    setTimeout(function () {
      setUpdated(false);
    }, 3000);
  };

  useEffect(() => {
    if (dataRef.current !== data) {
      dataRef.current = data;
      setUpdated(true);
      colorTimeout();
    }
  }, [dataRef, data]);

  return (
    <div>
      <p>Server time:</p>
      {data && (
        <p className={updated ? classes.big_color : classes.big}>
          {data.split(",")[1]}
        </p>
      )}
    </div>
  );
};
