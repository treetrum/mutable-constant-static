const fetch = require('node-fetch');
const crypto = require('crypto');
const path = require('path');

const utils = require('./src/utils/index.js');
const { createPostSlug } = utils;

const createWordpressNode = post => {
    const { id, title, content, date, modified, slug, status, tags } = post;
    return {
        // Required fields.
        id: `${id}`,
        parent: null, // or null if it's a source node without a parent
        children: [],
        internal: {
            type: 'wordpressPost',
            contentDigest: crypto
                .createHash('sha256')
                .update(post.content.rendered)
                .digest('hex')
        },
        // Extra fields
        title: title.rendered,
        content: content.rendered,
        date,
        modified,
        slug,
        status,
        tags
    };
};

exports.sourceNodes = async ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;

    // Create wordpress post nodes
    const wordpressPosts = await fetch(
        'http://mutableconstant.com/wp-json/wp/v2/posts'
    ).then(d => d.json());
    wordpressPosts.forEach(post => createNode(createWordpressNode(post)));

    // We're done, return.
    return;
};

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

    console.log({ createPage });
};
