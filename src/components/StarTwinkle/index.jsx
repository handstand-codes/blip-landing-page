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
  /**
   * Need the frequency to scale with the browser width to ensure consistancy
   * After fiddling around for a bit, this feels about right
   */
  const WINDOW_FRACTION = 3 / 5;
  const GAIN = 200;
  const ODDS = Math.floor(windowSize.width * WINDOW_FRACTION + GAIN);
  const FREQ = 300;

  return (
    <div className={styles.container}>
      {rowArray?.map((i) => (
        <StarRow key={i} columns={colArray} odds={ODDS} freq={FREQ} />
      ))}
    </div>
  );
};

export default StarTwinkle;
