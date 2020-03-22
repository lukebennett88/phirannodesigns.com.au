import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'nuka-carousel';

import { useGraphQL } from '../hooks/use-graphql';
import Header from './header';
import { CarouselControls, CarouselSlide } from './carousel';
import ContactButton from './contact-button';

export default function Hero({ isHome }) {
  const { allServicesJson } = useGraphQL();

  return (
    <div className="relative">
      <Header isHome={isHome} />
      <Carousel
        dragging={false}
        easing="easeCubicInOut"
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        wrapAround
        renderBottomLeftControls={({ previousSlide, nextSlide }) => (
          <CarouselControls
            previousSlide={previousSlide}
            nextSlide={nextSlide}
          />
        )}
      >
        {allServicesJson.nodes.map(navItem => {
          return <CarouselSlide key={navItem.id} navItem={navItem} />;
        })}
      </Carousel>
      <ContactButton />
    </div>
  );
}

Hero.propTypes = {
  isHome: PropTypes.bool,
};
