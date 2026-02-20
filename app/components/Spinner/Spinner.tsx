import React from "react";
import { Loader } from "react-feather";

import styles from "./Spinner.module.css";

type SpanStyle = React.CSSProperties & { "--speed": string };

function Spinner({ color = "black", size = 24, opacity = 0.5, speed = 1200 }) {
  return (
    <span
      className={styles.wrapper}
      style={
        {
          opacity,
          "--speed": `${speed}ms`,
          width: size,
          height: size,
        } as SpanStyle
      }
    >
      <Loader color={color} size={size} />
    </span>
  );
}

export default Spinner;
