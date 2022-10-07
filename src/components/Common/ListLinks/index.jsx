import { Link } from "gatsby";
import React from "react";

/** ============================================================================
 * @component
 * Used to render lists of internal and external links from CMS
 */

const ListLinks = ({ links }) =>
  links?.map((link) => {
    const internalUrl =
      link.reference?.slug?.current === `/`
        ? `/`
        : `/${link.reference?.slug?.current}`;
    return (
      <li key={link._key}>
        {link._type === `linkInternal` && (
          <Link to={internalUrl}>{link.title}</Link>
        )}
        {link._type === `linkExternal` && (
          <a
            href={link.url}
            rel={link.newWindow ? `noreferrer noopener` : null}
            target={link.newWindow ? `_blank` : `_self`}
          >
            {link.title}
          </a>
        )}
      </li>
    );
  });

export default ListLinks;
