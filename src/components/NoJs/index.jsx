import { Link } from "gatsby";
import React from "react";
import * as styles from "./NoJs.module.scss";

const NoJs = () => (
  <noscript>
    <div className={styles.container}>
      For full functionality of this site it is necessary to enable JavaScript.
      Here are the{` `}
      <Link to="https://www.enable-javascript.com/" ariaLabel="Enable JS">
        instructions how to enable JavaScript in your web browser.
      </Link>
    </div>
  </noscript>
);

export default NoJs;
