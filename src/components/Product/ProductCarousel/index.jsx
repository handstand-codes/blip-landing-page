import React from "react";
import styled from "@emotion/styled";
import { ProductCard, SwiperCarousel } from "~components";

/** ============================================================================
 * @css
 */
const Section = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  color: var(--color-black);
`;

const Slide = styled.div``;

/** ============================================================================
 * @component
 * Carousel of clickable product cards.
 * @param products  array  Products from the catalogue (~hooks/useProducts.jsx).
 */
const ProductCarousel = ({
  gridwrap,
  keyPrefix,
  products,
  slideColumnWidth
}) => (
  <Section>
    <SwiperCarousel
      options={{ spaceBetween: 20, slidesPerView: 3 }}
      slides={products.map((product) => (
        <Slide
          id={`${keyPrefix}-${product?.handle}`}
          key={`${keyPrefix}-${product?.handle}`}
        >
          <ProductCard data={product} />
        </Slide>
      ))}
      gridwrap={gridwrap}
      slideColumnWidth={slideColumnWidth}
    />
  </Section>
);

export default ProductCarousel;
