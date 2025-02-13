import React, { useEffect, useState } from "react";
import styles from "../style/Loading.module.css";

type LoaderProps = {
  text?: string;
};

const Loader: React.FC<LoaderProps> = ({ text = "loading..." }) => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("wss://echo.websocket.org");

    ws.onopen = () => setIsOffline(false);
    ws.onclose = () => setIsOffline(true);
    ws.onerror = () => setIsOffline(true);

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.circlePart}></div>
      <div className={styles.loaderText}>{isOffline ? text : "Connected!"}</div>
    </div>
  );
};

export default Loader;
