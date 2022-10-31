import React from "react";
import { useWindowSize } from "~hooks";
import Star from "./Star";
import * as styles from "./StarTwinkle.module.scss";
import { size } from "./Star/Star.module.scss";

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
  /**
   * Need the frequency to scale with the browser width to ensure consistancy
   * After fiddling around for a bit, this feels about right
   */
  const GAIN = 600;
  const ODDS = Math.floor(windowSize.width + GAIN);
  const FREQ = 150;

  return (
    <div className={styles.container} aria-hidden="true">
      {rowArray?.map((i) => (
        <StarRow key={i} columns={colArray} odds={ODDS} freq={FREQ} />
      ))}
    </div>
  );
};

export default StarTwinkle;
