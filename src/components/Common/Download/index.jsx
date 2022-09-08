import React from 'react';
import styled from '@emotion/styled';
import { Button } from '~components';

const Container = styled.sect`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Link = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  display: flex;
  width: 100%;

  &:after {
    content: ' ';
    flex: 1;
    margin: 0px 8px;
    border-bottom: 1px dashed var(--color-black-20);
    width: 100%;
    display: inline-block;
  }
`;

const Download = ({ links }) => (
  <Container>
    {links &&
      links.map((link) => (
        <Link>
          <Text className="b1">{link.text}</Text>
          <Button className="b1" to={link.target} title={link.text}>
            <span>{link.buttonText}</span>
          </Button>
        </Link>
      ))}
  </Container>
);

export default Download;
