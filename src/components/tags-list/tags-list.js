import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classes from './tags-list.module.css';
import { slugify } from '../../utils/slugify';
import { camelize } from '../../utils/camelize';
import spacing from '../../styles/spacing.module.css';

const TagsList = ({ tags }) => {
	if (tags === undefined || tags.length === 0) {
		return null;
	}

	return (
		<div className={[classes.tags]}>
			{tags.sort().map((tag, index) => (
				<Link key={index} to={`/tag/${slugify(tag)}`}>
					<div className={
						[
							classes[camelize(tag)], 
							spacing.p_l_2, 
							spacing.p_r_08, 
							spacing.p_y_04
						].join(' ')}>
						{tag}
					</div>
				</Link>
			))}
		</div>
	)
};

TagsList.propTypes = {
	tags: PropTypes.array
};

export default TagsList