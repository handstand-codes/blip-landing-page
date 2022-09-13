/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import * as Slices from "~slices";

const SanitySlice = (props) => {
  const { data } = props;

  console.log(data);

  const { _type: sliceType } = data;

  if (!sliceType) {
    // eslint-disable-next-line no-console
    console.error(
      `Please pass a _type from your template to the Section component`
    );

    return <></>;
  }

  const sectionName =
    sliceType[0].toUpperCase() + sliceType.slice(1, sliceType.length);

  const CustomSection = Slices[sectionName.replace(`Slice`, ``)];

  if (!CustomSection) {
    // eslint-disable-next-line no-console
    console.error(
      `Can't find Section ${sectionName}, are you sure it exists in the sections directory?`
    );

    return <></>;
  }

  return (
    <div className={`Sanity${sectionName}`}>
      <CustomSection {...props} />
    </div>
  );
};

export default SanitySlice;
