import React from "react";
import * as Slices from "~slices";

const SanitySlice = (props) => {
  const { data } = props;
  const { _type: sliceType } = data;

  // Handle null _type prop
  if (!sliceType) {
    console.error(
      `Please pass a _type from your template to the Section component`
    );
    return null;
  }

  // Convert section type from snake_case to TitleCase
  const sectionName =
    sliceType[0].toUpperCase() + sliceType.slice(1, sliceType.length);

  // Get the section component
  const CustomSection = Slices[sectionName];

  // Handle missing exported Section
  if (!CustomSection) {
    console.error(
      `Can't find Section ${sectionName}, are you sure it exists in the sections directory?`
    );
  }

  // Return section
  return <CustomSection {...props} />;
};

export default SanitySlice;
