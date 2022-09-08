import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { SliceContainer } from "~components";
import { breakpoint } from "~utils/css";

const List = styled.div`
  transition: opacity 1s var(--cubic-easing), transform 1s var(--cubic-easing);
  transform: ${({ inView }) =>
    inView ? `translate3d(0, 0rem, 0)` : `translate3d(0, 6rem, 0)`};
  opacity: ${({ inView }) => (inView ? 1 : 0)};
`;

const Font = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-family: ${({ family }) => family && family};
  letter-spacing: -0.01rem;
  line-height: 100%;
  word-break: break-word;

  ${breakpoint(`tablet`)} {
    font-size: 78px;
  }
`;

const FontList = ({ data: { title, backgroundColor, fonts } }) => {
  const [ref, inView] = useInView();

  return (
    <SliceContainer backgroundColor={backgroundColor.title} title={title}>
      <List ref={ref} inView={inView}>
        {fonts.map((font) => (
          <Font family={font}>{font}</Font>
        ))}
      </List>
    </SliceContainer>
  );
};

export default FontList;
