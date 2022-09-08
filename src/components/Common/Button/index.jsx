import React from "react";
import styled from "@emotion/styled";
import { Link } from "~components";
import { ReactComponent as ArrowLeft } from "~assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "~assets/svg/arrow-right.svg";

const StyledLink = styled((props) => <Link {...props} />)`
  display: inline-block;
  background: var(--color-green-100);
  color: var(--color-white);
  border-radius: 100px;
  padding: 12px 42px;
`;

const IconContainer = styled.span`
  display: flex;

  & > svg {
    height: 1.5rem;
  }
`;

const Button = ({
  to,
  title,
  children,
  className,
  hasIcon,
  alignRight,
  stroke
}) => (
  <StyledLink className={className} to={to} title={title || ``}>
    {hasIcon && (
      <IconContainer>
        {(!alignRight && <ArrowLeft stroke={stroke} />) || (
          <ArrowRight stroke={stroke} />
        )}
      </IconContainer>
    )}

    {children}
  </StyledLink>
);

export default Button;
