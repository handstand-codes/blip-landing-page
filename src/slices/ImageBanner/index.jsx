import React from "react";
import styled from "@emotion/styled";
import { Image, Scrambler } from "~components";
import { breakpoint } from "~utils/css.js";

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
  height: 150vw;
  max-height: none;
  padding-bottom: 0;
  position: relative;
  display: block;
  overflow: hidden;
  padding-top: 29px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 24px;
  background: ${({ bgColor }) =>
    bgColor ? `var(--color-${bgColor})` : `var(--color-black-20)`};

  ${breakpoint(`small-tablet`)} {
    height: 120vw;
  }

  ${breakpoint(`large-tablet`)} {
    height: auto;
    max-height: 968px;
    padding-bottom: 56.25%;
  }
`;

const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;

  ${breakpoint(`large-tablet`)} {
    padding: 0;
  }
`;

const BannerText = styled.h1`
  color: ${({ color }) =>
    color ? `var(--color-${color})` : `var(--color-black-100)`};
`;

const Preheading = styled.p`
  color: var(--color-white);
  text-align: center;
  animation: var(--animation-appear-down);
  animation-timing-function: 0.3s var(--cubic-easing) forwards;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  animation: var(--animation-appear-up);
  animation-timing-function: 0.3s var(--cubic-easing) forwards;
`;

const ImageWrapper = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  height: auto;
  transform: translate(-50%, -50%);

  ${breakpoint(`large-tablet`)} {
    width: 50%;
  }
`;

//
// JSX

const Banner = ({ data }) => {
  const { backgroundColor, fontColor, image, heading, preheading } = data;

  return (
    <Section bgColor={backgroundColor?.title || backgroundColor}>
      {preheading && <Preheading className="b1">{preheading}</Preheading>}

      {image && (
        <ImageContainer>
          <ImageWrapper>
            <Image image={image} alt={image?.altText || heading || ``} />
          </ImageWrapper>
        </ImageContainer>
      )}

      {heading && (
        <Article>
          <BannerText className="d1" color={fontColor?.title || fontColor}>
            <Scrambler iterations={15} text={heading} />
          </BannerText>
        </Article>
      )}
    </Section>
  );
};

export default Banner;
