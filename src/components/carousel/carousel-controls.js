import PropTypes from 'prop-types';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function CarouselControls({ previousSlide, nextSlide }) {
  return (
    <div className="w-screen px-4 sm:px-6">
      <div className="flex mx-auto mb-12 pointer-events-none max-w-7xl">
        <button
          onClick={previousSlide}
          type="button"
          className="flex items-center justify-center w-10 h-10 ml-4 text-xl text-white border border-transparent rounded-full pointer-events-auto first:ml-0 bg-transparent-white-25 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal"
        >
          <span className="sr-only">Previous slide</span>
          <FaChevronLeft className="mr-1" />
        </button>
        <button
          onClick={nextSlide}
          type="button"
          className="flex items-center justify-center w-10 h-10 ml-4 text-xl text-white border border-transparent rounded-full pointer-events-auto first:ml-0 bg-transparent-white-25 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal"
        >
          <span className="sr-only">Next slide</span>
          <FaChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
}

CarouselControls.propTypes = {
  nextSlide: PropTypes.func,
  previousSlide: PropTypes.func,
};
