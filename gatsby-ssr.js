/* eslint-disable import/prefer-default-export */

const RootElement = require(`./root-element`);

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};
exports.wrapRootElement = () => RootElement;
