// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import { useGraphQL } from './src/hooks/use-graphql.js'
// const { site } = useGraphQL();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

export function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        allServicesJson {
          nodes {
            bold
            id
            slide {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  src
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            label
            slug
            carousel_tagline
            thin
          }
        }
        allSiteNavigationJson {
          nodes {
            id
            label
            bold
            thin
            slug
          }
        }
        allClientsJson {
          nodes {
            id
            logo {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                  srcSet
                  presentationHeight
                  presentationWidth
                }
              }
            }
            name
          }
        }
        clientLogos: allFile(filter: { relativeDirectory: { eq: "clients" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 300) {
                src
              }
              id
            }
          }
        }
        site {
          siteMetadata {
            title
            email
            phone
            phoneFormatted
            address
            hours
            facebook
            instagram
            instagramAccessToken
          }
        }
      }
    `
  );
  return data;
}
