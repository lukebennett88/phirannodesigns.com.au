import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SiteContext = createContext({
  isMenuOpen: false,
  setMenuOpen: () => {},
});

export function SiteProvider({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <SiteContext.Provider
      value={{
        isMenuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

SiteProvider.propTypes = {
  children: PropTypes.node,
};
