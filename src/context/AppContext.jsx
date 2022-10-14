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

  const [pathname, setPathname] = useState(null);
  const [primaryColor, setPrimaryColor] = useState(`#E2FF2E`);
  const [globalSettings, setGlobalSettings] = useState();

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
    pathname,
    primaryColor,
    setPrimaryColor,
    globalSettings,
    setGlobalSettings
  }));

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
