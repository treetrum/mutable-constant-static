module.exports = {
    siteMetadata: {
        title: 'Mutable Constant',
        subtitle: 'Nerdy things written by some guy called Sam.',
        description: 'A place for Sam Davis to write out some of the scary thoughts he has each day as he lives out his life as a front-end developer.'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {}
                        }
                    }
                ]
            }
        }
    ]
};
