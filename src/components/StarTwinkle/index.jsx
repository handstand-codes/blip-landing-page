import React from "react";
import Star from "./Star";
import * as styles from "./StarTwinkle.module.scss";
import { size } from "./Star/Star.module.scss";
import useWindowSize from "~hooks/useWindowSize";

const StarRow = ({ columns, odds, freq }) => (
  <div>
    {columns.map((i) => (
      <Star key={i} odds={odds} freq={freq} />
    ))}
  </div>
);

const StarTwinkle = () => {
  // Render enough stars to fill screen
  const windowSize = useWindowSize();
  const iconSizeInt = parseInt(size.replace(`px`, ``));

  const columns = Math.ceil(windowSize.width / iconSizeInt);
  const rows = Math.ceil(windowSize.height / iconSizeInt);

  const rowArray = [...Array(rows || 0).keys()];
  const colArray = [...Array(columns || 0).keys()];

  // Sparkle params
  const ODDS = windowSize.width || 1000;
  const FREQ = 200;

  return (
    <div className={styles.container}>
      {rowArray?.map((i) => (
        <StarRow key={i} columns={colArray} odds={ODDS} freq={FREQ} />
      ))}
    </div>
  );
};

export default StarTwinkle;
