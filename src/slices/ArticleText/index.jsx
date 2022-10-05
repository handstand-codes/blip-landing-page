import React from "react";
import styled from "@emotion/styled";
import { Grid, PortableText } from "~components";
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
const ArticleText = ({ data: { backgroundColor, fontColor, _rawBody } }) => (
  <Container
    background={backgroundColor?.hex || `#ffffff`}
    color={fontColor?.hex || `#000000`}
  >
    <Grid>
      <ContentWrapper>
        <PortableText blocks={_rawBody} />
      </ContentWrapper>
    </Grid>
  </Container>
);

export default ArticleText;
