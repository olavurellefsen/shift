import React from 'react';
import PropTypes from "prop-types";
import { render } from "react-testing-library";
import { BrowserRouter } from 'react-router-dom';
import '../i18n';

const AllTheProviders = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "react-testing-library";

// override render method
export { customRender as render };

AllTheProviders.propTypes = {
  children: PropTypes.any
};