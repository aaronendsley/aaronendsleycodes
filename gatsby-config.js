const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
    siteMetadata: {
        title: `AaronEndsley.Codes`,
        description: `Aaron Endsley's Blog About Code, Tech and Christianity`,
        links: [
            'https://www.sufficientscripts.io/',
            'https://github.com/aaronendsley',
            'https://twitter.com/aaronendsley',
        ],
        author: `Aaron Endsley`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_ID,
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Aaron-Endsley-Codes`,
                short_name: `Aaron Endsley Codes`,
                start_url: `/`,
                background_color: `#25b3b8`,
                theme_color: `#25b3b8`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
