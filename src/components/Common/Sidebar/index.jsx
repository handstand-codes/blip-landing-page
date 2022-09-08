import React from "react";
import styled from "@emotion/styled";
import { Link } from "~components";
import { breakpoint } from "~utils/css";
import { ReactComponent as Wordmark } from "~assets/svg/logos/wordmark.svg";
import { ReactComponent as Logomark } from "~assets/svg/logos/logomark.svg";

// import { EASING_CUBIC } from '~components/_legacy/Animations/index.jsx';

/** ============================================================================
 * @component
 * Global nav.
 */

const Container = styled.div`
  min-width: 268px;
  display: none;
  font-feature-settings: "zero" on;
  height: 100vh;
  position: sticky;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 30;
  justify-content: space-between;
  padding: 2rem;
  background-color: var(--color-black-100);
  color: var(--color-white);

  ${breakpoint(`large-tablet`)} {
    display: flex;
  }
`;

const LinkContainer = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const LogoContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : `0`)};

  & > a {
    & > svg {
      height: ${(props) => (props.height ? props.height : `1.5rem`)};
    }
  }
`;

const SidebarLinkWrapper = styled((props) => <Link {...props} />)`
  position: relative;
  display: block;
  padding: 0.25rem 0;
`;

const SidebarLink = styled.p`
  color: var(--color-black-10);
  transition: 0.15s var(--cubic-easing) transform;
  &:hover {
    transform: translate3d(0.3rem, 0, 0);
  }
`;

const SidebarTitle = styled.p`
  margin-bottom: 0.25rem;
  color: var(--color-grey-30);
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SidebarLinks = ({ title, links }) => (
  <LinkContainer>
    <SidebarTitle className="caption">{title}</SidebarTitle>

    <ul>
      {links?.map((link) => (
        <li key={`${link.title}-sidebar-link`}>
          <SidebarLinkWrapper to={`/${link.reference.slug.current}/`}>
            <SidebarLink className="b2">{link.title}</SidebarLink>
          </SidebarLinkWrapper>
        </li>
      ))}
    </ul>
  </LinkContainer>
);

const Sidebar = ({ data: { links } }) => (
  <Container>
    <Wrapper>
      <LogoContainer>
        <Link to="/">
          <Wordmark fill="white" />
        </Link>
      </LogoContainer>

      {links.map((link) => {
        const { title, links: menuLinks } = link;
        return (
          <SidebarLinks
            key={`${title}-sidebar-links`}
            title={title}
            links={menuLinks}
          />
        );
      })}

      <LogoContainer height="1.25rem" marginTop="15rem">
        <Link to="/">
          <Logomark fill="white" />
        </Link>
      </LogoContainer>
    </Wrapper>
  </Container>
);

export default Sidebar;
