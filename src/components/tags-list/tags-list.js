import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { slugify } from '../../utils/slugify'
import classes from './tags-list.module.css'

const TagsList = ({ tags }) => {
	if (tags === undefined || tags.length === 0) {
		return null;
	}

	return (
		<div className={classes.tags}>
			{tags.map((tag, index) => (
				<Link key={index} to={`/tag/${slugify(tag)}`}>
					<div className={classes[slugify(tag)]}>
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