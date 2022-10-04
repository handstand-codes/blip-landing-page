import React from "react";
import * as style from "./WidthContainer.module.scss";

const WidthContainer = ({ children }) => (
  <div className={style.container}>{children}</div>
);

export default WidthContainer;
