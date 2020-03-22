import PropTypes from 'prop-types';
import React from 'react';
import Image from 'gatsby-image';

export function ServicePageHero({ servicesJson }) {
  return (
    <div className="relative bg-white teal-bar">
      <div className="mt-8 sm:mt-12">
        <div className="relative bottom-half-gray-100">
          <div className="relative px-4 sm:px-6">
            <div className="w-full mx-auto overflow-hidden rounded-lg shadow-lg max-w-7xl">
              <Image fluid={servicesJson.hero.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ServicePageHero.propTypes = {
  servicesJson: PropTypes.object,
};
