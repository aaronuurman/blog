import React from 'react';
import PropTypes from 'prop-types';
import spacing from '../../styles/spacing.module.css';
import classes from './post-overview-footer.module.css';

const PostOverviewFooter = ({ date, timeToRead }) => (
	<div className={[classes.post_overview_footer, spacing.m_t_2].join(' ')}>
		<div>{date}</div>
		<div>{timeToRead} minutes to read</div>
	</div>
);

PostOverviewFooter.propTypes = {
	date: PropTypes.instanceOf(Date),
	timeToRead: PropTypes.number
}

export default PostOverviewFooter;