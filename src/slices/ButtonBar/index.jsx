import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "~components";
import { breakpoint } from "~utils/css.js";

// to do //
// move nested selector styles to button component

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 24px;

  ${breakpoint(`small-tablet`)} {
    flex-direction: row;
  }

  & > a {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;

    &:last-child {
      text-align: right;
      flex-direction: row-reverse;
    }

    ${breakpoint(`small-tablet`)} {
      width: 50%;
    }
  }
`;

const ButtonBar = ({
  data: {
    previousText,
    previousTitle,
    previousTarget,
    forwardsText,
    forwardsTitle,
    forwardsTarget
  }
}) => (
  <Section>
    <Button
      className="h1"
      to={previousTarget}
      title={previousTitle || previousText}
      hasIcon
      stroke="white"
      css={css`
        padding: 35px;
        background: var(--color-black-100);
        border: 1px solid var(--color-white);
        transition: 0.5s var(--cubic-easing) background-color;

        ${breakpoint(`large-tablet`)} {
          padding: 40px;
        }

        &:hover {
          background-color: var(--color-green-100);
        }
      `}
    >
      <span>{previousText}</span>
    </Button>

    <Button
      alignRight
      className="h1"
      to={forwardsTarget}
      title={forwardsTitle || forwardsText}
      hasIcon
      stroke="white"
      css={css`
        padding: 40px;
        background: var(--color-black-100);
        border: 1px solid var(--color-white);

        transition: 0.5s var(--cubic-easing) background-color;

        &:hover {
          background-color: var(--color-green-100);
        }
      `}
    >
      <span>{forwardsText}</span>
    </Button>
  </Section>
);

export default ButtonBar;
