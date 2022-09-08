import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button, Image } from "~components";
import { useInterval } from "~hooks";
import { breakpoint } from "~utils/css";

import sample1 from "~assets/images/TEST-home-1.jpg";
import sample2 from "~assets/images/TEST-home-2.jpg";
import sample3 from "~assets/images/TEST-home-3.jpg";

/** ============================================================================
 * @css
 */
const Container = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 0;
  // background: ${({ background }) => `${background}`};
  // color: ${({ color }) => `${color}`};
  background: var(--color-classic-black);

  ${breakpoint(`large-tablet`)} {
    height: 47.1vw;
    min-height: 600px;
    max-height: 900px;
  }
`;

const SlidingBackground = styled.div`
  transition: 1s var(--cubic-easing) transform;

  transform: translate3d(${({ active }) => `${active ? `0` : `100%`}`}, 0, 0);

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: ${({ background }) => `var(--color-${background})`};
`;

const Slide = styled.div`
  // transition: 1s var(--cubic-easing) transform;

  // transform: translate3d(${({ active }) =>
    `${active ? `0` : `100%`}`}, 0, 0);

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: ${({ background }) => `var(--color-${background})`};
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 20;
  // background: var(--color-sick-lime);
  color: var(--color-classic-black);

  ${breakpoint(`large-tablet`)} {
    width: 33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 52px;
  }
`;
const Text = styled.article`
  width: 100%;
  position: relative;

  ${breakpoint(`large-tablet`)} {
    height: 136px;
  }
`;

const Media = styled.div`
  position: relative;

  ${breakpoint(`large-tablet`)} {
    width: 66.667%;
  }
`;
const Figure = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
`;
const TitleOverlay = styled.div`
  width: 530px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: var(--color-sick-lime);

  ${breakpoint(`large-tablet`)} {
    padding: 0 52px;
  }
`;
const TextOverlay = styled.div`
  width: 530px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 30;
  // color: var(--color-sick-lime);
  color: black;

  ${breakpoint(`large-tablet`)} {
    padding: 0 52px 52px;
  }
`;

const CarouselSlide = ({ active, data: { background, heading, image } }) => {
  let i;

  return (
    <Slide>
      <SlidingBackground active={active} background={background} />

      <TextWrapper>
        <Text>
          <h2
            css={css`
              font-weight: bold;
            `}
            className="h1"
          >
            FACE
          </h2>
        </Text>
      </TextWrapper>

      <Media
        css={css`
          display: none;
        `}
      >
        <Figure>
          <Image
            css={css`
              width: 100%;
              height: 100%;
              position: relative;
              display: block;
              object-fit: cover;
            `}
            image={sample1}
          />
        </Figure>

        <TitleOverlay>
          <h1
            css={css`
              font-weight: bold;
            `}
            className="h1"
          >
            TEXTS FROM YOUR EX.
          </h1>
        </TitleOverlay>
      </Media>
    </Slide>
  );
};
/** ============================================================================
 * @component
 */
const ShopCarousel = ({ data: { backgroundColour, fontColour } }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const [activeSlide, setActiveSlide] = useState(0);

  // ---------------------------------------------------------------------------
  // variables

  const slides = [
    {
      image: sample1,
      background: `sick-lime`,
      heading: `TEXTS FROM YOUR EX.`
    },
    {
      image: sample2,
      background: `darling-mauve`,
      heading: `DMS FROM BAEBAE.`
    },
    {
      image: sample3,
      background: `sunkiss`,
      heading: `OMG DON’T.`
    }
  ];

  // ---------------------------------------------------------------------------
  // lifecycle

  useInterval(() => {
    setActiveSlide(activeSlide >= slides.length - 1 ? 0 : activeSlide + 1);
  }, 3000);

  // ---------------------------------------------------------------------------
  // render

  return (
    <Container
      background={backgroundColour?.hex || `#ffffff`}
      color={fontColour?.hex || `#000000`}
    >
      {/* // each group has this // */}
      {slides.map((slide, slideIndex) => {
        const { background, heading, image } = slide;

        return (
          <CarouselSlide active={activeSlide === slideIndex} data={slide} />
        );
      })}

      <TextOverlay>
        <p className="b1">
          Makeup you can rely on. So you can face whatever life has to throw at
          you.
        </p>

        <Button
          css={css`
            margin-top: 1.5rem;
            border: 1px solid var(--color-sick-lime);
          `}
          color="sick-lime"
          onClick={() => {}}
        >
          <span className="button-text">SHOP NOW</span>
        </Button>
      </TextOverlay>
    </Container>
  );
};

export default ShopCarousel;
