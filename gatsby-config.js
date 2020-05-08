//const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

//const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

// const client = contentful.createClient({
//   space: SPACE_ID,
//   accessToken: ACCESS_TOKEN,
// });

const getAboutEntry = (entry) => entry.sys.contentType.sys.id === 'about';

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    //'gatsby-plugin-sharp',
    //'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cabin', 'Open Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
};
