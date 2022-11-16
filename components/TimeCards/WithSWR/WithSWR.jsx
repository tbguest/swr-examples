import useSWR from "swr";
import classes from "../TimeCards.module.css";
import { useRef, useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { Card } from "../../Card";
import { Notification } from "../Notification";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const WithSWR = ({ url, opts }) => {
  const [tabHasFocus, setTabHasFocus] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [cacheRevalidate, setCacheRevalidate] = useState(false);
  const [cacheHit, setCacheHit] = useState(false);
  const { data, error } = useSWR(url, fetcher, opts);
  const dataRef = useRef(data);
  const firstFetch = useRef(true);

  const { cache } = useSWRConfig();

  console.log(cache);

  const updatedTimeout = () => {
    setTimeout(function () {
      setUpdated(false);
    }, 3000);
  };

  const cacheHitTimeout = () => {
    setTimeout(function () {
      setCacheHit(false);
    }, 3000);
  };

  const cacheMissTimeout = () => {
    setTimeout(function () {
      setCacheRevalidate(false);
    }, 3000);
  };

  useEffect(() => {
    const handleFocus = () => {
      setTabHasFocus(true);

      cacheHitTimeout();
      setCacheHit(true);
    };

    const handleBlur = () => {
      setTabHasFocus(false);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  useEffect(() => {
    if (dataRef.current !== data) {
      if (cache.get(url) && !firstFetch.current) {
        console.log("it's a hit");
      }
      if (cache.get(url) === data) {
        cacheMissTimeout();
        setCacheRevalidate(true);
        firstFetch.current = false;
      }
      dataRef.current = data;
      setUpdated(true);
      updatedTimeout();
    }
  }, [dataRef, data, cache, url]);

  return (
    <Card>
      <div className={classes.container}>
        <h2 className={classes.title}>useSWR</h2>
        <>
          <div className={classes.text_main}>
            <ul className={classes.notifications}>
              {cacheHit && <Notification text={"cache hit!"} />}
              {cacheRevalidate && <Notification text={"cache updated!"} />}
            </ul>
            <div className={updated ? classes.text_highlight : classes.text}>
              {data && data.split(",")[1]}
            </div>
          </div>
        </>
      </div>
    </Card>
  );
};
