import React from "react";
import { Link } from "gatsby";
import { SEO } from "~components";

const FourOhFour = () => (
  <>
    <h2 className="h1">This page doesn‘t exist.</h2>
    <Link
      style={{
        border: `1px solid black`,
        padding: `1rem`
      }}
      to="/"
    >
      Back to home
    </Link>
  </>
);

export default FourOhFour;

export const Head = () => <SEO />;
