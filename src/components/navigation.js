import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks/use-graphql';
import { SiteContext } from '../context/site-context';

export default function Navigation() {
  const { allSiteNavigationJson } = useGraphQL();
  const { isMenuOpen, setMenuOpen } = useContext(SiteContext);
  useEffect(() => {
    const handleEscape = e => {
      if (e.keyCode === 27) {
        setMenuOpen(false);
      }
    };
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleEscape);
    }
  }, [setMenuOpen]);

  return (
    <>
      <div
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close menu."
        className={`fixed inset-0 z-30 transition-opacity duration-300 ease-linear bg-black opacity-0 pointer-events-none ${
          isMenuOpen
            ? 'opacity-50 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        className={`fixed inset-y-0 px-6 right-0 z-40 flex flex-col w-full max-w-sm duration-300 ease-in-out transform bg-teal-700 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="self-end p-1 mt-5 -mr-4">
          {isMenuOpen && (
            <button
              onClick={() => setMenuOpen(false)}
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-teal-600"
            >
              <svg
                className="w-8 h-8 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="flex flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1 px-2 my-auto text-right">
            {allSiteNavigationJson.nodes.map(navItem => (
              <Link
                key={navItem.id}
                to={navItem.slug}
                onClick={() => setMenuOpen(false)}
                className="block w-full px-2 py-2 mt-1 text-base text-3xl font-bold leading-none text-white uppercase transition duration-150 ease-in-out rounded-md font-display first:mt-0 group hover:text-white hover:bg-teal-600 focus:outline-none focus:text-white focus:bg-teal-600"
              >
                {navItem.bold}
                <span className="inline-block font-thin">
                  &nbsp;{navItem.thin}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
