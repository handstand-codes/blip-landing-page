import React from "react";
import * as style from "./WidthContainer.module.scss";

const WidthContainer = ({ children, paddingOnly }) => (
  <div
    className={[style.padding, paddingOnly ? null : style.container].join(` `)}
  >
    {children}
  </div>
);

export default WidthContainer;
