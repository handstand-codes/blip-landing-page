import React from "react";
import { WidthContainer, Dropdown } from "~components";
import * as styles from "./DropdownGroup.module.scss";

const DropdownGroup = ({ data: { title, dropdownBlocks } }) => (
  <div className={styles.container}>
    <WidthContainer>
      <h2 className={[`h2`, styles.title].join(` `)}>{title}</h2>
      {dropdownBlocks?.map((dropdown, i) => (
        <Dropdown
          key={i}
          title={dropdown.buttonText}
          content={dropdown.contentText}
        />
      ))}
    </WidthContainer>
  </div>
);

export default DropdownGroup;
