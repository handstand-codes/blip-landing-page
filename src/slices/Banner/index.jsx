import React from "react";
import styled from "@emotion/styled";
import { Button, Scrambler } from "~components";

/** ============================================================================
 * @component
 * L+M styled banner marquee.
 *
 * @param  text  string  The static/large/centered banner string.
 */

//
// CSS

const Section = styled.section`
  width: 100%;
  height: 56.25vw;
  max-height: 968px;
  position: relative;
  display: block;
  overflow: hidden;
  background: ${({ bgColor }) => bgColor || `var(--color-black-20)`};
`;

const Article = styled.article`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 40px 34px;

  & > a {
    margin-top: 20px;
  }
`;

const BannerText = styled.h1`
  color: ${({ color }) => color || `var(--color-black-100)`};
`;

//
// JSX

const Banner = ({ data }) => {
  const { backgroundColor, fontColor, heading, ctaText, ctaTarget } = data;

  return (
    <Section bgColor={backgroundColor?.hex}>
      <Article>
        {heading && (
          <BannerText className="h1" color={fontColor?.hex}>
            <Scrambler iterations={15} text={heading} />
          </BannerText>
        )}

        {/* to do replace with button data from sanity */}
        {ctaText && ctaTarget && (
          <Button to={ctaTarget} title={ctaText}>
            <span>{ctaText}</span>
          </Button>
        )}
      </Article>
    </Section>
  );
};

export default Banner;
