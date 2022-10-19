import React, { createContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    if (typeof window !== `undefined` && window?.location?.pathname) {
      setPathname(window.location.pathname);
    }

    return globalHistory.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);

  const contextProps = useMemo(() => ({
    pathname
  }));

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
