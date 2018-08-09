import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle, subtitle }) => (
    <header className="navbar">
        <div className="outer">
            <div className="inner">
                <h1>
                    <Link to="/" style={{}}>
                        {siteTitle}
                    </Link>
                </h1>
                <p>{subtitle}</p>
            </div>
        </div>
    </header>
);

export default Header;
