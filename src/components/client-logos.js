import React from 'react';
import Carousel from 'nuka-carousel';

import { useGraphQL } from '../hooks/use-graphql';
import ClientLogo from './client-logo';

export default function ClientLogos() {
  const { allClientsJson } = useGraphQL();

  return (
    <article id="clients" className="px-4 py-12 bg-teal-700 sm:px-6">
      <div className="relative w-full mx-auto overflow-hidden text-white max-w-7xl sm:flex sm:items-center">
        <h2 className="font-bold leading-none uppercase sm:mr-24 font-display">
          <span className="text-lg font-thin sm:text-2xl">Some of</span>
          <br />
          <span className="text-4xl sm:text-6xl">
            <span>our </span>
            <br className="hidden sm:inline" />
            <span className="font-light">clients.</span>
          </span>
        </h2>
        <Carousel
          autoplay
          autoplayInterval={3000}
          className="sm:ml-12"
          easing="easeCubicInOut"
          slideWidth="200px"
          wrapAround
          dragging={false}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomCenterControls={null}
        >
          {allClientsJson.nodes.map(node => (
            <ClientLogo key={node.id} node={node} />
          ))}
        </Carousel>
      </div>
    </article>
  );
}
