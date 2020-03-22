import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { SiteContext } from '../context/site-context';
import { useGraphQL } from '../hooks';
import LogoLandscape from './logo-landscape';

export default function Header({ isHome }) {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  const { isMenuOpen, setMenuOpen } = useContext(SiteContext);
  return (
    <header
      className={`flex flex-wrap-reverse items-center justify-between w-full pt-6 pl-4 pr-1 mx-auto sm:pl-6 sm:pr-3 max-w-7xl ${isHome &&
        'absolute top-0 inset-x-0 z-10 text-white'}`}
    >
      <Link to="/" className="mr-6">
        <span className="sr-only">{siteMetadata.title}</span>
        <LogoLandscape
          className={`h-6 transition duration-150 ease-in sm:h-8 ${
            isHome ? 'text-white' : 'text-gray-900 hover:text-teal-700'
          }`}
        />
      </Link>
      <div className="flex items-center">
        <a
          href={`tel:${siteMetadata.phone}`}
          className={`hidden mr-3 transition duration-150 ease-in font-display md:block ${
            isHome ? 'text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Call <span className="font-thin">{siteMetadata.phoneFormatted}</span>
        </a>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          type="button"
          className={`-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 ${
            isHome ? '' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          <svg
            className="w-8 h-8"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  isHome: PropTypes.bool,
};
