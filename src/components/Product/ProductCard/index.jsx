import React from "react";
import styled from "@emotion/styled";
import { Image } from "~components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
`;

const Titles = styled.div`
  margin: 8px 0 12px;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  color: var(--color-black-40);
`;

const ProductCard = ({ data: { image, price, subtitle, title, target } }) => (
  <Container>
    <Image image={image} />
    <Titles>
      <a className="b1" href={target} target="_blank" rel="noreferrer">
        {title}
      </a>
      <Subtitle className="b1">{subtitle}</Subtitle>
    </Titles>
    <p className="b1">{price}</p>
  </Container>
);

export default ProductCard;
