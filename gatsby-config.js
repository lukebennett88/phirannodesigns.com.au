const postCssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const resolveConfig = require('tailwindcss/resolveConfig');
const dotenv = require('dotenv');

const tailwindConfig = require('./tailwind.config');

const fullConfig = resolveConfig(tailwindConfig);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Phiranno Designs',
    description:
      'We are a local company in Port Macquarie offering Web Design and Development, Graphic Design, and creative digital marketing using videography and photography. Contact us now if you want to stand out from the rest!',
    siteUrl: 'https://www.phirannodesigns.com.au',
    author: '', // e.g. @phirannodesigns — used for twitter cards in SEO component
    email: 'design@phirannodesigns.com.au',
    phone: '+61401421719',
    phoneFormatted: '0401 421 719',
    address: '15 Chancellors Drive, Thrumster NSW 2444',
    hours: 'Monday – Friday, 8am – 5pm',
    facebook: 'https://www.facebook.com/phirannodesigns',
    instagram: 'https://www.instagram.com/phirannodesigns',
    instagramAccessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
    googleMaps: 'https://g.page/phirannodesigns',
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4054063758654!2d152.82626135088609!3d-31.458032305324362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b76000716e65573%3A0x637654d59c847317!2s15%20Chancellors%20Dr%2C%20Thrumster%20NSW%202444!5e0!3m2!1sen!2sau!4v1580772067480!5m2!1sen!2sau',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.phirannodesigns.com.au',
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '316384802510313',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131240850-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Phiranno Designs',
        short_name: 'PD',
        start_url: '/',
        background_color: fullConfig.theme.colors.teal['600'],
        theme_color: fullConfig.theme.colors.teal['600'],
        display: 'minimal-ui',
        icon: 'src/images/assets/favicon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwind('./tailwind.config.js'),
          autoprefixer,
          cssnano,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        extractors: [/[\w-/.:]+(?<!:)/g],
        purgeOnly: ['src/css/tailwind.css'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'src/data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'gotffy9a',
        dataset: 'production',
      },
    },
  ],
};
