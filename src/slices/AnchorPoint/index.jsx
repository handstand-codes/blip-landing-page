import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 900px;
`;

const AnchorPoint = ({ data }) => {
  const { title } = data;
  return (
    <Container className="container">
      <h1>{title}</h1>
    </Container>
  );
};

export default AnchorPoint;
