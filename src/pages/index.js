import React from 'react';
import Link from 'gatsby-link';
import { createPostSlug } from '../utils';
import DateLine from '../components/dateline'

export default function IndexPage({ data }) {
    const posts = data.allMarkdownRemark.edges.map(({ node }) => node);
    return (
        <div className="page-content posts-list">
            <div className="outer">
                <div className="inner">
                    {posts.map(post => {
                        const { title, date } = post.frontmatter;
                        return (
                            <article className="post-snippet" key={createPostSlug(post)}>
                                <h3 className="title">
                                    <Link to={createPostSlug(post)}>{title}</Link>
                                </h3>
                                <p className="snippet">{post.excerpt}</p>
                                <DateLine date={date} />
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export const wordPressPostsQeuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        slug
                        date
                    }
                }
            }
        }
    }
`;
