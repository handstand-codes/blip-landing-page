import React from "react";
import styled from "@emotion/styled";
import { useApp } from "~hooks";
import { Link } from "~components";
import { breakpoint } from "~utils/css";
import { ReactComponent as Logomark } from "~assets/svg/logos/logomark.svg";

/** ============================================================================
 * @css
 */
const Container = styled.div`
  transition: transform 0.5s var(--cubic-easing);
  transform: ${({ menuActive }) =>
    `translate3d(${menuActive ? 0 : `-100vw`}, 0, 0)`};
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: var(--color-black-100);
  color: var(--color-white);

  ${breakpoint(`large-tablet`)} {
    display: flex;
  }
`;

const MenuContainer = styled.div`
  transition: opacity 1s var(--cubic-easing), transform 1s var(--cubic-easing);
  transition-delay: 200ms;

  opacity: ${({ menuActive }) => (menuActive ? 1 : 0)};
  transform: ${({ menuActive }) =>
    `translate3d(${menuActive ? 0 : `-12.5vw`}, 0, 0)`};
`;

const LinkContainer = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const MenuLinkWrapper = styled(Link)`
  position: relative;
  display: block;
  padding: 0.25rem 0;
`;

const MenuLink = styled.p`
  color: var(--color-black-10);
  transition: 0.15s var(--cubic-easing) transform;
  &:hover {
    transform: translate3d(0.3rem, 0, 0);
  }
`;

const Title = styled.p`
  margin-bottom: 0.25rem;
  color: var(--color-grey-30);
`;

const LogoContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ marginTop }) => marginTop || `0`};

  & > a {
    & > svg {
      height: ${({ height }) => height || `1.5rem`};
    }
  }
`;

const MenuLinks = ({ title, links, setMenuActive }) => (
  <LinkContainer>
    <Title className="caption">{title}</Title>

    <ul>
      {links?.map((link) => (
        <li key={`${link.title}-menu-link`}>
          <MenuLinkWrapper
            onClick={() => setMenuActive(false)}
            to={`/${link.reference.slug.current}/`}
          >
            <MenuLink className="b2">{link.title}</MenuLink>
          </MenuLinkWrapper>
        </li>
      ))}
    </ul>
  </LinkContainer>
);

const Menu = ({ data: { links } }) => {
  const { menuActive, setMenuActive } = useApp();

  //

  return (
    <Container menuActive={menuActive}>
      <MenuContainer menuActive={menuActive}>
        {links?.map((link) => {
          const { title, links: menuLinks } = link;

          return (
            <MenuLinks
              key={`${title}-menu-links`}
              title={title}
              links={menuLinks}
              setMenuActive={setMenuActive}
            />
          );
        })}

        <LogoContainer height="1.25rem" marginTop="15rem">
          <Link to="/">
            <Logomark fill="white" />
          </Link>
        </LogoContainer>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
