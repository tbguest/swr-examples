import useSWR from "swr";
import classes from "../../styles/Home.module.css";
import { useRef, useEffect, useState } from "react";
import { useSWRConfig } from "swr";

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
      console.log("Tab has focus");
      setTabHasFocus(true);

      cacheHitTimeout();
      setCacheHit(true);
    };

    const handleBlur = () => {
      console.log("Tab lost focus");
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
    <div>
      <p>Server time:</p>
      {data && (
        <>
          <div className={updated ? classes.big_color : classes.big}>
            <ul className={classes.notifications}>
              {cacheHit && (
                <li className={classes.notification_container}>
                  <div className={classes.notification_item_1}>cache hit!</div>
                </li>
              )}
              {cacheRevalidate && (
                <li className={classes.notification_container}>
                  <div className={classes.notification_item_2}>
                    cache updated!
                  </div>
                </li>
              )}
            </ul>
            {data.split(",")[1]}
          </div>
        </>
      )}
    </div>
  );
};
