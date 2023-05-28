import type { GatsbyConfig } from 'gatsby';

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
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-postcss`,
    ],
};

export default config;
