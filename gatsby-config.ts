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
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/': [],
                }, // option to add more headers. `Link` headers are transformed by the below criteria
                allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Domine\:700`, `DM Sans\:400,500`, `Bona Nova\:400,400i`],
                display: 'swap',
            },
        },
    ],
};

export default config;
