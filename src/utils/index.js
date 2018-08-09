const Moment = require('moment');

module.exports.createPostSlug = post => {
    const { slug, date } = post.frontmatter;
    const momentDate = new Moment(date);
    const year = momentDate.format('Y');
    const month = momentDate.format('MM');
    return `/${year}/${slug}`;
};
