import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Grid } from "~components";
import { breakpoint } from "~utils/css";

/** ============================================================================
 * @css
 */
const Container = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  background: ${({ background }) => `${background}`};
  color: ${({ color }) => `${color}`};
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;

  ${breakpoint(`small-tablet`)} {
    grid-column: 2 / span 6;
  }

  ${breakpoint(`large-tablet`)} {
    grid-column: 4 / span 6;
  }

  ${breakpoint(`large-desktop`)} {
    grid-column: 5 / span 4;
  }
`;

/** ============================================================================
 * @component
 */
const ColourBanner = ({ data: { backgroundColour, fontColour, title } }) => (
  <Container
    background={backgroundColour?.hex || `#ffffff`}
    color={fontColour?.hex || `#000000`}
  >
    <Grid>
      {/* <div
        css={css`
          grid-column: -1 / 1;
          height: 100vw;
          border: 10px solid red;

          ${breakpoint(`large-tablet`)} {
            height: 50vw;
            grid-column: span 6 / span 6;
          }
        `}
      >
        <></>
      </div>

      <div
        css={css`
          grid-column: span 6 / span 6;
          height: 50vw;
          border: 10px solid blue;
          display: none;

          ${breakpoint(`large-tablet`)} {
            display: block;
          }
        `}
      >
        <></>
      </div> */}

      <ContentWrapper>
        <p className="b1">{title}</p>
      </ContentWrapper>
    </Grid>
  </Container>
);

export default ColourBanner;
