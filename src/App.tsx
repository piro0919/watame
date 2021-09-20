import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import gangimari from "./gangimari.png";
import { useWindowSize } from "@react-hook/window-size";
import styles from "./style.module.css";
import stripe from "./stripe.jpg";

function App() {
  const [width, height] = useWindowSize();
  const style = useMemo<CSSProperties>(
    () => ({
      height: `${height}px`,
    }),
    [height]
  );
  const backgroundStyle = useMemo<CSSProperties>(
    () => ({
      height: `${Math.max(height, width) * 1.5}px`,
    }),
    [height, width]
  );
  const [reverse, setReverse] = useState(false);

  const handleClick = useCallback(() => {
    setReverse((prevReverse) => !prevReverse);
  }, []);

  return (
    <div className={styles.wrapper} style={style}>
      <img
        alt="background"
        className={`${styles.background} ${reverse ? styles.reverse : ""}`}
        src={stripe}
        style={backgroundStyle}
      />
      <img
        alt="watame"
        className={styles.watame}
        onClick={handleClick}
        src={gangimari}
      />
    </div>
  );
}

export default App;
