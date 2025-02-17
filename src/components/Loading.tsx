import React, { useEffect, useState } from "react";
import styles from "../style/Loading.module.css";
import { LoaderProps } from "../interfaces/Types";

// Loader կոմպոնենտը, որը ընդունում է "text" (նախնական արժեքը՝ "loading...")
const Loader: React.FC<LoaderProps> = ({ text = "loading..." }) => {
  const [isOffline, setIsOffline] = useState(false); // Ստեղծում ենք state՝ հետևելու համար ինտերնետի հասանելիությունը

  useEffect(() => {
    // Ստեղծում ենք WebSocket կապ
    const ws = new WebSocket("wss://echo.websocket.org");

    // Երբ կապը հաջողությամբ բացվում է, նշում ենք, որ օնլայն ենք
    ws.onopen = () => setIsOffline(false);

    // Երբ կապը փակվում է, նշում ենք, որ օֆլայն ենք
    ws.onclose = () => setIsOffline(true);

    // Եթե սխալ է առաջանում, նույնպես նշում ենք, որ օֆլայն ենք
    ws.onerror = () => setIsOffline(true);

    // Երբ կոմպոնենտը հեռացվում է էջից, փակում ենք WebSocket կապը՝ խուսափելու հիշողության արտահոսքից
    return () => {
      ws.close();
    };
  }, []); // useEffect-ը աշխատում է միայն մեկ անգամ, երբ կոմպոնենտը հեռացվում է

  return (
    <div className={styles.loaderContainer}>
      {/* Loader-ի անիմացիայի համար */}
      <div className={styles.circlePart}></div>

      {/* Ցուցադրում է "Connected!" եթե առցանց է, հակառակ դեպքում՝ "loading..." կամ user-ի փոխանցած text-ը */}
      <div className={styles.loaderText}>{isOffline ? text : "Connected!"}</div>
    </div>
  );
};

export default Loader;
