import { Link } from "gatsby";
import React from "react";

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
