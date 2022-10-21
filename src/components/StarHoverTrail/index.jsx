import React from "react";
import Star from "./Star";
import * as styles from "./StarHoverTrail.module.scss";
import { size } from "./Star/Star.module.scss";
import useWindowSize from "~hooks/useWindowSize";

const StarRow = ({ columns }) => (
  <div>
    {columns.map((i) => (
      <Star key={i} />
    ))}
  </div>
);

const StarHoverTrail = () => {
  const windowSize = useWindowSize();

  const iconSizeInt = parseInt(size.replace(`px`, ``));

  const columns = Math.ceil(windowSize.width / iconSizeInt);
  const rows = Math.ceil(windowSize.height / iconSizeInt);

  const rowArray = [...Array(rows || 0).keys()];
  const colArray = [...Array(columns || 0).keys()];

  return (
    <div className={styles.container}>
      {rowArray?.map((i) => (
        <StarRow key={i} columns={colArray} />
      ))}
    </div>
  );
};

export default StarHoverTrail;
