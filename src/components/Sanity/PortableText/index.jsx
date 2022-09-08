/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import BlockContent from "@sanity/block-content-to-react";
import { getGatsbyImageData } from "gatsby-source-sanity";

import { Go, Image } from "~components";

const UnOrderedList = styled.ul`
  padding-left: 1.5ch;
  list-style: outside disc;

  p {
    display: inline;
  }
`;

const OrderedList = styled.ol`
  padding-left: 1.5ch;
  list-style: outside disc;

  p {
    display: inline;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.25rem;
`;

const PortableText = ({ className, blocks, serializer }) => {
  const [serializers] = useState({
    types: {
      block: ({ children }) => <p className="b1">{children}</p>,
      altImage: (props) => {
        const fluidProps = getGatsbyImageData(
          props.node.asset._ref,
          { maxWidth: 800 },
          { projectId: `1vm7omwc`, dataset: `production` }
        );
        return <Image image={fluidProps} alt={props.node.altText} />;
      }
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      sup: ({ children }) => <sup>{children}</sup>,
      sub: ({ children }) => <sub>{children}</sub>,
      link: ({ children, mark }) => (
        <Go to={mark.href} newTab>
          {children}
        </Go>
      )
    },
    list: ({ type, children }) => {
      if (type === `bullet`) {
        return <UnOrderedList>{children}</UnOrderedList>;
      }
      return <OrderedList>{children}</OrderedList>;
    },
    listItem: ({ children }) => (
      <ListItem>
        <p className="b1">{children}</p>
      </ListItem>
    )
  });

  //

  if (!blocks) {
    console.error(`Portable Text: Blocks is undefined`);
    return null;
  }

  return (
    <div className={className}>
      <BlockContent
        blocks={blocks}
        serializers={serializer || serializers}
        css={[
          css`
            & > * {
              margin-bottom: 1rem;
            }

            & > *:last-child {
              margin-bottom: 0;
            }
          `
        ]}
      />
    </div>
  );
};

export default PortableText;
