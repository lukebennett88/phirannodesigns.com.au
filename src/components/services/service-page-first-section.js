import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

export function ServicePageFirstSection({ servicesJson }) {
  return (
    <article className="px-4 pb-40 bg-gray-100 sm:px-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mt-16 sm:items-start sm:flex md:mt-24">
          <div>
            <div className="leading-7">
              <div className="col-gap-6 text-gray-700 md:columns-2">
                <h1 className="text-4xl leading-none text-gray-800 uppercase font-display">
                  {servicesJson.first_heading.bold} <br />
                  <span className="font-light">
                    {servicesJson.first_heading.thin}
                  </span>
                </h1>
                {servicesJson.first_copy.map((paragraph, index) => (
                  <p key={index} className="mt-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <p className="mt-4">
              <Link
                to="/contact"
                className="inline-block px-6 py-2 font-thin leading-none text-white uppercase bg-gray-800 font-display"
              >
                Contact us
              </Link>
            </p>
          </div>
          <div className="p-4 mx-auto mt-6 text-4xl leading-none text-gray-800 uppercase border-2 border-gray-800 sm:mt-0 sm:ml-4 font-display md:text-left">
            {servicesJson.page_tagline.bold.map(line => (
              <>
                {line} <br className="hidden sm:inline" />
              </>
            ))}
            <span className="font-light">
              {servicesJson.page_tagline.thin.map((line, index) => (
                <>
                  {line}{' '}
                  {index !== servicesJson.page_tagline.thin.length - 1 && (
                    <br className="hidden sm:inline" />
                  )}
                </>
              ))}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

ServicePageFirstSection.propTypes = {
  servicesJson: PropTypes.object,
};
