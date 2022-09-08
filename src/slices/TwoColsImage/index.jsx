import React from "react";
import styled from "@emotion/styled";
import { Button, Grid, Image } from "~components";

const image = `/images/placeholder/grey-block.jpg`;
const placeHolderImage = {
  url: image
};

const Container = styled.section`
  grid-column: 1/-1;
  margin: 80px 0;
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 40px 34px;
`;

const Col = styled.div`
  position: relative;
  width: 50%;
`;

const Img = styled(Image)`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  margin-bottom: 20px;
`;

const TwoColsImage = () => (
  <Grid>
    <Container>
      <Col>
        <figure>
          <Img image={placeHolderImage} />
        </figure>
        <Content>
          <Text className="h1">Selling the sizzle, not the sausage</Text>
          <Button to="/" title="Find out more">
            <span>Find out more</span>
          </Button>
        </Content>
      </Col>

      <Col>
        <figure>
          <Img image={placeHolderImage} />
        </figure>
        <Content>
          <Text className="h1">Selling the sizzle, not the sausage</Text>
          <Button to="/" title="Find out more">
            <span>Find out more</span>
          </Button>
        </Content>
      </Col>
    </Container>
  </Grid>
);

export default TwoColsImage;
