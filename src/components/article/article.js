import React from 'react';
import PropTypes from 'prop-types';
import classes from './article.module.css';

const Article = ({cssClasses, children }) => (
	<article className={`${cssClasses.join(', ')}`}>
		{children}
	</article>
);

Article.propTypes = {
	cssClasses: PropTypes.array,
	children: PropTypes.any
}

Article.defaultProps = {
	cssClasses: [],
}

export default Article;