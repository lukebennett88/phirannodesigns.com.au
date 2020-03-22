import PropTypes from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';

export function CarouselSlide({ navItem }) {
  return (
    <article
      style={{
        minHeight: `40rem`,
        maxHeight: `calc(80vh - 4.5rem)`,
      }}
      className="relative flex flex-col flex-shrink-0 w-full"
    >
      <div className="absolute inset-0 w-full h-full">
        <GatsbyImage
          fluid={navItem.slide.childImageSharp.fluid}
          className="w-full h-full"
        />
      </div>
      <div className="relative flex flex-1 px-4 sm:px-6 bg-transparent-black-50">
        <div className="flex flex-1 w-full mx-auto max-w-7xl">
          <div className="max-w-xl mt-auto mb-32 text-white">
            <h2 className="text-4xl leading-none sm:text-6xl font-display">
              {navItem.bold} <br />
              <span className="font-thin">{navItem.thin}.</span>
            </h2>
            <div className="mt-8 sm:leading-8 sm:text-2xl">
              <p className="mt-2">{navItem.carousel_tagline}</p>
              <p className="mt-2">
                <a href={navItem.slug} className="font-bold underline">
                  Click here for more information.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

CarouselSlide.propTypes = {
  navItem: PropTypes.object,
};
