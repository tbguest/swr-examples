import { useRef, useEffect, useState } from "react";
import classes from "../TimeCards.module.css";
import { Card } from "../../Card";
import { Notification } from "../Notification";

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
    <Card>
      <div className={classes.container}>
        <h2 className={classes.title}>useEffect</h2>
        <>
          <div className={classes.text_main}>
            <div className={updated ? classes.text_highlight : classes.text}>
              {data && data.split(",")[1]}
            </div>
          </div>
        </>
      </div>
    </Card>
  );
};
