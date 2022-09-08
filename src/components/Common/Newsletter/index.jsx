import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as ArrowRight } from '~assets/svg/arrow-right.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  position: relative;
  max-width: 388px;

  & > svg {
    position: absolute;
    top: 50%;
    height: 18px;
    right: 12px;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  border: 1px solid var(--color-black-40);
  border-radius: 2px;
  background-color: var(--color-black-100);
  padding: 12px;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-black-40);
    opacity: 1;
  }

  &:focus {
    border: 1px solid var(--color-green-100);
  }
`;

const Heading = styled.p`
  margin-bottom: 8px;
`;

const Newsletter = ({ heading }) => (
  <Container>
    <Heading className="b1">{heading}</Heading>
    <Form>
      <iframe
        title="ABC Signup"
        src="https://loveandmoney.substack.com/embed"
        width="100%"
        height="200"
        style={{ borderRadius: '12px' }}
        frameBorder="0"
        scrolling="no"
      />
    </Form>
  </Container>
);
export default Newsletter;
