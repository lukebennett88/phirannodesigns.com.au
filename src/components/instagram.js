import React from 'react';

import InstagramImages from './instagram-images';

export default function Instagram() {
  return (
    <article id="instagram" className="px-4 py-12 text-teal-700 sm:px-6">
      <div className="w-full mx-auto max-w-7xl md:flex md:items-start xl:items-center">
        <h2 className="font-bold leading-none uppercase sm:mr-24 font-display">
          <span className="text-lg font-thin sm:text-2xl">Some of</span>
          <br />
          <span className="text-4xl sm:text-6xl">
            <span>our </span>
            <br className="hidden sm:inline" />
            <span className="font-light">work.</span>
          </span>
        </h2>
        <div className="grid flex-1 grid-cols-2 gap-4 mt-12 md:mt-0 md:grid-cols-3 xl:grid-cols-6">
          <InstagramImages />
        </div>
      </div>
    </article>
  );
}
