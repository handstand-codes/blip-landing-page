import React from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { Download, Newsletter } from "~components";
import { breakpoint } from "~utils/css.js";
import { splitStringToParagraphs } from "~utils/helpers";

const Container = styled.section`
  background-color: ${({ backgroundColor }) =>
    backgroundColor
      ? `var(--color-${backgroundColor})`
      : `var(--color-black-100)`};
  color: ${({ fontColor }) => fontColor || `var(--color-white)`};
  border-radius: 12px;
  margin-bottom: 24px;
  grid-column: 1/-1;
  padding: ${({ backgroundColor }) =>
    backgroundColor ? `48px 40px 64px` : `48px 0 64px`};
  gap: 20px;
  transition: opacity 1s var(--cubic-easing), transform 1s var(--cubic-easing);
  transition-delay: 0.15s;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translate3d(0, ${({ inView }) => (inView ? 0 : `1rem`)}, 0);
  display: flex;
  flex-direction: column;

  ${breakpoint(`large-tablet`)} {
    padding: 48px 58px 64px;
  }

  ${breakpoint(`large-tablet`)} {
    flex-direction: row;
  }
`;

const Header = styled.header`
  width: 100%;
  position: relative;
  display: block;

  ${breakpoint(`large-tablet`)} {
    width: 33.33%;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${({ color }) =>
    color ? `var(--color-${color})` : `var(--color-white)`};
  display: flex;
  flex-direction: column;
  gap: ${({ contentStyle }) => (contentStyle === `h1` ? `40px` : `20px`)};
`;

const BodyWrapper = styled.div`
  width: 100%;
  position: relative;
  display: block;
  margin-top: 0;
`;

const ComponentContainer = styled.div`
  margin-top: 40px;
`;

const Caption = styled.h4`
  margin-top: 26px;
`;

const TwoColsText = ({
  data: { backgroundColor, fontColor, title, subtitle, caption, content }
}) => {
  // const { title, subtitle, caption } = header;
  const { ref, inView } = useInView();

  return (
    <Container
      ref={ref}
      inView={inView}
      backgroundColor={backgroundColor?.title}
    >
      <Header>
        <div>
          {title && <h2 className="h2">{title}</h2>}

          {subtitle && <h3 className="h2">{subtitle}</h3>}

          {caption && <Caption className="caption">{caption}</Caption>}
        </div>
      </Header>

      <BodyWrapper>
        <Body color={fontColor?.title}>
          {content &&
            content.map((item) => {
              switch (item._type) {
                case `download`:
                  return (
                    <ComponentContainer>
                      <Download links={item?.links} />
                    </ComponentContainer>
                  );
                case `newsletter`:
                  return (
                    <ComponentContainer>
                      <Newsletter heading={item?.heading} />
                    </ComponentContainer>
                  );
                case `textContent`:
                  return splitStringToParagraphs(
                    item?.content,
                    item?.contentStyle
                  );
                default:
                  return <span />;
              }
            })}
        </Body>
      </BodyWrapper>
    </Container>
  );
};

export default TwoColsText;
