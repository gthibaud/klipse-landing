import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    jsxRuntime: `automatic`,
    siteMetadata: {
        siteUrl: 'https://www.klip.se',
        url: 'https://www.klip.se',
        title: 'Klipse',
        titleTemplate: 'Klipse – %s',
        description: "Vos yeux méritent d'être entraînés",
        image: '/images/logo.png',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Klipse`,
                short_name: `Klipse`,
                start_url: `/`,
                background_color: `#FEF7EF`,
                theme_color: `#FEF7EF`,
                display: `standalone`,
                icon: `static/images/logo.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [`Domine\:700`, `DM Sans\:400,500`, `Bona Nova\:400,400i`],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID || 'G-XXXXXXXXXX',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },
                enableWebVitalsTracking: true,
            },
        },
    ],
};

export default config;
