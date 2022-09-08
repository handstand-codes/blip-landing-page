import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoint } from "~utils/css.js";

import { Button, ProductCarousel } from "~components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ fontColor }) =>
    fontColor ? `var(--color-${fontColor})` : `var(--color-white)`};
  padding: 48px 0px 64px;

  ${breakpoint(`desktop`)} {
    padding: 48px 58px 64px;
  }
`;

const Header = styled.h3`
  margin-bottom: 24px;
`;

const FeaturedProducts = ({
  data: { heading, fontColor, products, ctaText, ctaTarget }
}) => (
  <Container fontColor={fontColor?.title}>
    <Header className="h2">{heading}</Header>

    {products && <ProductCarousel keyPrefix="featured" products={products} />}

    {ctaText && ctaTarget && (
      <Button
        className="b1"
        to={ctaTarget}
        title={ctaText}
        css={css`
          text-align: center;
          margin: 92px auto 0;
          padding: 12px 99px;
          color: var(--color-white);
          background: var(--color-black-100);
          border: 1px solid var(--color-white);

          transition: 0.5s var(--cubic-easing) background-color;

          &:hover {
            background-color: var(--color-green-100);
          }
        `}
      >
        <span>{ctaText}</span>
      </Button>
    )}
  </Container>
);

export default FeaturedProducts;
