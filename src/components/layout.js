/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './navigation';
import Header from './header';
import HeroCarousel from './hero-carousel';
import Footer from './footer';

export default function Layout({ isHome, children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-white">
      <Navigation />
      {isHome ? <HeroCarousel isHome={isHome} /> : <Header />}
      <main className="relative z-0 flex flex-col flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};
