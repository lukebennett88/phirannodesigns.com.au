import PropTypes from 'prop-types';
import React from 'react';

export default function Logo({ className }) {
  return (
    <svg
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      clipRule="evenodd"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M1.386 23.333V0h9.2c2.621 0 4.902.838 6.655 2.467C18.947 4.11 19.8 6.128 19.8 8.44c0 2.327-.87 4.343-2.576 5.941-1.784 1.63-4.11 2.452-6.78 2.452H7.08v6.5H1.386zm9.2-17.67h-3.29v5.523l3.29.015c1.675 0 3.304-1.148 3.304-2.761 0-1.598-1.63-2.777-3.305-2.777zm6.732 15.762a2.605 2.605 0 012.591-2.591c1.396 0 2.591 1.179 2.591 2.59 0 1.412-1.179 2.576-2.59 2.576a2.582 2.582 0 01-2.592-2.575z"
      />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
