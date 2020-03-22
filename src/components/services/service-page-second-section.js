import PropTypes from 'prop-types';
import React from 'react';
import Image from 'gatsby-image';

export function ServicePageSecondSection({ servicesJson }) {
  return (
    <article className="px-4 bg-white sm:px-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-3 col-gap-6">
          <div className="relative">
            <div className="inset-x-0 bottom-0 lg:absolute">
              <Image
                fluid={servicesJson.secondary_image.childImageSharp.fluid}
              />
              <div className="p-4 text-sm text-white bg-gray-900">
                <h3 className="text-xl font-thin leading-none uppercase font-display">
                  Port Macquarie Day Spa Logo
                </h3>
                <div className="mt-2">
                  <p>
                    We work closely with you during the design process to make
                    sure that every customer is satisfied with the results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 col-start-2 col-end-4">
            <div className="col-gap-6 pt-5 mt-24 text-gray-600 border-t-2 border-gray-800 md:columns-2">
              <h2 className="text-4xl font-bold leading-none text-gray-800 uppercase font-display">
                {servicesJson.second_heading.bold} <br />
                <span className="font-light">
                  {servicesJson.second_heading.thin}
                </span>
              </h2>
              {servicesJson.second_copy.map((paragraph, index) => (
                <p key={index} className="mt-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

ServicePageSecondSection.propTypes = {
  servicesJson: PropTypes.object,
};
