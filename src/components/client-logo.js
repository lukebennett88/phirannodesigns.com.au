import React from 'react';
import PropTypes from 'prop-types';

export default function ClientLogo({ node }) {
  return (
    <div className="relative flex-shrink-0 w-32 h-32 mx-8">
      <img
        alt={node.name}
        src={node.logo.childImageSharp.fluid.src}
        srcSet={node.logo.childImageSharp.fluid.srcSet}
        height={node.logo.childImageSharp.fluid.presentationHeight}
        width={node.logo.childImageSharp.fluid.presentationWidth}
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}

ClientLogo.propTypes = {
  node: PropTypes.object,
};
