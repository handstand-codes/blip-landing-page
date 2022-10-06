/* eslint-disable camelcase */
import React, { createContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";

export const AppContext = createContext({});

/** ============================================================================
 * @context
 * Global application data.
 */
const AppProvider = ({ children }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const [menuActive, setMenuActive] = useState(false);
  const [pathname, setPathname] = useState(null);
  const [primaryColor, setPrimaryColor] = useState(`#E2FF2E`);

  // ---------------------------------------------------------------------------
  // methods

  // ...

  // ---------------------------------------------------------------------------
  // lifecycle

  useEffect(() => {
    if (typeof window !== `undefined` && window?.location?.pathname) {
      setPathname(window.location.pathname);
    }

    return globalHistory.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);

  // ---------------------------------------------------------------------------
  // render

  const contextProps = useMemo(() => ({
    menuActive,
    setMenuActive,
    pathname,
    primaryColor,
    setPrimaryColor
  }));

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
