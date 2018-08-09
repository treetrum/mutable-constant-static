const path = require('path');

const utils = require('./src/utils/index.js');
const { createPostSlug } = utils;

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    const blogPostTemplate = path.resolve('./src/templates/post.js');

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        html
                        frontmatter {
                            date
                            slug
                            title
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: createPostSlug(node),
                component: blogPostTemplate,
                context: {
                    slug: node.frontmatter.slug
                }
            });
        });
    });

};
