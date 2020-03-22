import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import {
  ServicePageHero,
  ServicePageFirstSection,
  ServicePageSecondSection,
} from '../components/services';
import secondaryImage from '../images/services/secondary/graphic-design.png';

export default function ServicePageTemplate({ data: { servicesJson } }) {
  return (
    <Layout>
      <ServicePageHero servicesJson={servicesJson} />
      <ServicePageFirstSection servicesJson={servicesJson} />
      <ServicePageSecondSection
        servicesJson={servicesJson}
        secondaryImage={secondaryImage}
      />
    </Layout>
  );
}

ServicePageTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    servicesJson(slug: { eq: $slug }) {
      slug
      hero {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      first_heading {
        bold
        thin
      }
      first_copy
      id
      page_tagline {
        bold
        thin
      }
      secondary_image {
        childImageSharp {
          fluid(maxWidth: 384) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      second_heading {
        bold
        thin
      }
      second_copy
    }
  }
`;
