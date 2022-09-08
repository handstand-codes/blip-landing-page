import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { css } from "@emotion/react";

const Link = ({
  children,
  activeClassName,
  className,
  disable,
  to,
  title,
  target = `_blank`,
  tabIndex,
  ariaLabel,
  onClick = () => {},
  onMouseOver = () => {},
  onMouseOut = () => {}
}) => {
  const isExternal = to && to.match(/(http|#|tel:|mailto:)/);

  const containsSiteUrl =
    process.env.GATSBY_SITE_URL &&
    to &&
    to.indexOf(process.env.GATSBY_SITE_URL) !== -1;

  if (isExternal && !containsSiteUrl) {
    return (
      <a
        href={to}
        className={className || ``}
        css={css`
          pointer-events: ${disable ? `none` : `auto`};
          :hover {
            text-decoration: none;
          }
        `}
        title={title || null}
        aria-label={ariaLabel || null}
        target={target}
        onClick={onClick}
        rel="nofollow noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  const withTrailingSlash = to ? `${to}${to.endsWith(`/`) ? `` : `/`}` : false;
  const linkTo = containsSiteUrl
    ? withTrailingSlash.replace(containsSiteUrl, ``)
    : withTrailingSlash;

  return (
    <GatsbyLink
      to={linkTo}
      aria-label={ariaLabel || null}
      activeClassName={activeClassName}
      className={className || ``}
      css={css`
        pointer-events: ${disable ? `none` : `auto`};

        :hover {
          text-decoration: none;
        }
      `}
      title={title || null}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      tabIndex={tabIndex}
    >
      {children}
    </GatsbyLink>
  );
};

export default Link;
