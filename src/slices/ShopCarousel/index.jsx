import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button, Image, ImageSwitcher, ObjectInspector } from "~components";
import { useSize } from "~hooks";
import { breakpoint } from "~utils/css";

import sample from "~assets/images/TEST-home-default.jpg";

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
  }
`;

const ObjectContainer = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 0;
  background: var(--color-classic-black);

  ${breakpoint(`large-tablet`)} {
    height: 60vw;
  }
`;

const Sidebar = styled.div`
  width: 25%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-sick-lime);
  color: var(--color-black);

  ${breakpoint(`large-tablet`)} {
    padding: 0 0 0 52px;
  }
`;

//

const Media = styled.div`
  width: calc(100% - 25%);
  position: relative;
  color: var(--color-sick-lime);
`;

const Figure = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const TitleOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;

  ${breakpoint(`large-tablet`)} {
    padding: 0 0 0 52px;
  }
`;

const TextOverlay = styled.div`
  width: 530px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 30;

  ${breakpoint(`large-tablet`)} {
    padding: 0 52px 52px;
  }
`;

/** ============================================================================
 * @component
 */
const ShopCarousel = ({ data: { backgroundColour, fontColour } }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const [activeSlide, setActiveSlide] = useState(0);

  const [containerRef, containerBoundingRect] = useSize();

  // ---------------------------------------------------------------------------
  // variables

  //

  // ---------------------------------------------------------------------------
  // lifecycle

  // useInterval(() => {
  //   setActiveSlide(activeSlide >= slides.length - 1 ? 0 : activeSlide + 1);
  // }, 3000);

  // ---------------------------------------------------------------------------
  // render

  return (
    <>
      <Container
        background={backgroundColour?.hex || `#ffffff`}
        color={fontColour?.hex || `#000000`}
      >
        <Sidebar>
          <h2
            css={css`
              height: 130px;
              font-weight: bold;
            `}
            className="h1"
          >
            FACE
          </h2>
        </Sidebar>

        <Media>
          <Figure ref={containerRef}>
            {/* <ImageSwitcher
            id="test-image-switcher"
            imageUrl="/images/webgl/TEST-home-default.jpg"
            resolution={{
              x: containerBoundingRect?.width || 0,
              y: containerBoundingRect?.height || 0
            }}
          /> */}
            <Image
              css={css`
                width: 100%;
                height: 100%;
                position: relative;
                display: block;
                object-fit: cover;
              `}
              image={sample}
            />
          </Figure>

          <TitleOverlay>
            <h1
              css={css`
                height: 130px;
                font-weight: bold;
              `}
              className="h1"
            >
              MEETINGS WITH
              <br />
              YOUR BOSS.
            </h1>
          </TitleOverlay>

          <TextOverlay>
            <p className="b1">
              Makeup you can rely on. So you can face whatever life has to throw
              at you.
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
        </Media>
      </Container>

      {/* 3D testing area */}

      <ObjectContainer>
        <ObjectInspector />
      </ObjectContainer>
    </>
  );
};

export default ShopCarousel;
