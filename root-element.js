import React from "react";
import PropTypes from "prop-types";
import AppProvider from "~context/AppContext.jsx";
// import { SomeEcommerceProvider } from '~context';

const Provider = ({ element }) => <AppProvider>{element}</AppProvider>;

Provider.propTypes = {
  element: PropTypes.node.isRequired
};

export default Provider;
