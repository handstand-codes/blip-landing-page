import React from "react";
import styled from "@emotion/styled";
import { Button } from "~components";

const Section = styled.section`
  width: 74vw;
  margin: 0 auto 61px;
`;

const Header = styled.header`
  width: 100%;
  margin-bottom: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const Review = styled.article``;

const ReviewTitle = styled.h3``;

const ReviewMeta = styled.p`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

const Author = styled.p`
  color: var(--color-black-40);
`;

const Heading = styled.heading``;

const Reviews = () => (
  <Section>
    <Header>
      <Heading>
        <h2 className="h1">Reviews</h2>
      </Heading>
      <Button to="/" title="Find out more">
        <span>Read all reviews</span>
      </Button>
    </Header>

    <ReviewContainer>
      <Review className="b1">
        <ReviewTitle>I am happy with product</ReviewTitle>

        <ReviewMeta>
          <p>stars</p>
          <Author>Armin, 00.00.00</Author>
        </ReviewMeta>

        <p>
          It was well worth the money! Very stylish and comfortable to wear. I
          am very picky when it comes to glasses and I find this...
        </p>
      </Review>

      <Review className="b1">
        <ReviewTitle>I am happy with product</ReviewTitle>

        <ReviewMeta>
          <p>stars</p>
          <Author>Armin, 00.00.00</Author>
        </ReviewMeta>

        <p>
          It was well worth the money! Very stylish and comfortable to wear. I
          am very picky when it comes to glasses and I find this...
        </p>
      </Review>

      <Review className="b1">
        <ReviewTitle>I am happy with product</ReviewTitle>

        <ReviewMeta>
          <p>stars</p>
          <Author>Armin, 00.00.00</Author>
        </ReviewMeta>

        <p>
          It was well worth the money! Very stylish and comfortable to wear. I
          am very picky when it comes to glasses and I find this...
        </p>
      </Review>
    </ReviewContainer>
  </Section>
);

export default Reviews;
