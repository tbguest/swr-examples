import { useRef, useEffect, useState } from "react";
import classes from "../../styles/Home.module.css";

export const WithUseEffect = ({ url }) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState("idle");

  const [updated, setUpdated] = useState(false);
  const dataRef = useRef(data);

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

  useEffect(() => {
    // if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <p>{"useEffect()"}</p>
      {data && (
        <p className={updated ? classes.big_color : classes.big}>
          {data.split(",")[1]}
        </p>
      )}
    </div>
  );
};
