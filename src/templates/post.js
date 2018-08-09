import React from 'react';
import Moment from 'moment';
import Helmet from 'react-helmet'
import DateLine from '../components/dateline';

export default function({ data }) {
    console.log(data);
    const post = data.markdownRemark;
    const { title, date } = post.frontmatter;
    const { html } = post;
    return (
        <div className="page-content">
            <article>
                <Helmet title={`${title} - ${data.site.siteMetadata.title}`} />
                <div className="outer">
                    <div className="inner">
                        <h2 className="post-title">{title}</h2>
                        <DateLine date={date} />
                        <div className="rte" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </article>
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date
                slug
                title
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
