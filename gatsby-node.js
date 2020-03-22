/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Query for all services
  const servicesResult = await graphql(`
    {
      allServicesJson {
        nodes {
          slug
        }
      }
    }
  `);

  // Iterate over all services and create a new page using a template
  const services = servicesResult.data.allServicesJson.nodes;
  services.forEach(service => {
    const { slug } = service;
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/service.js`),
      context: {
        slug,
      },
    });
  });
};
