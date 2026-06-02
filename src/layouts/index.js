import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';

import './scss/_normalize.css';
import './scss/_typography.css';
import './scss/_layout.css';
import './scss/_syntax-highlighting.css';

const Layout = ({ children, data }) => {
    const { siteMetadata: meta } = data.site;
    return (
        <div className="site-container">
            <Helmet>
                <title>{`${meta.title} - ${meta.subtitle}`}</title>
                <meta name="description" content={meta.description} />
            </Helmet>
            <Header siteTitle={meta.title} subtitle={meta.subtitle} />
            <div>{children()}</div>
        </div>
    );
}

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                subtitle
                description
            }
        }
    }
`;
