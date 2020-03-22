/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-nunito';

import { SiteProvider } from './src/context/site-context';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
