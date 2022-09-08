import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Scrambler } from "~components";
import { breakpoint } from "~utils/css";

const Section = styled.section`
  padding: 48px 40px 64px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor
      ? `var(--color-${backgroundColor})`
      : `var(--color-black-100)`};
  color: ${({ fontColor }) => fontColor || `var(--color-white)`};
  border-radius: 12px;
  margin-bottom: 24px;
  grid-column: 1/-1;

  ${breakpoint(`large-tablet`)} {
    padding: 48px 58px 64px;
  }

  ${({ _css }) => _css && _css}
`;

const TitleWrapper = styled.p`
  margin-bottom: 48px;
`;

const SliceContainer = ({ backgroundColor, title, children, _css }) => {
  const { ref, inView } = useInView();

  return (
    <Section backgroundColor={backgroundColor} _css={_css}>
      {title && (
        <TitleWrapper ref={ref}>
          {inView && (
            <Scrambler className="b1" delay={10} iterations={8} text={title} />
          )}
        </TitleWrapper>
      )}

      {children}
    </Section>
  );
};

export default SliceContainer;
