import React from 'react';
import PropTypes from 'prop-types';
import classes from './resources.module.css';
import spacing from '../../styles/spacing.module.css';

const Resources = ({ resources }) => {
	if (resources === null || resources.length === 0) {
		return null;
	}

	return (
		<details className={[classes.resources, spacing.m_y_2].join(' ')}>
			<summary>Available resources</summary>
			<ul className={[spacing.p_y_2, spacing.p_x_1].join(' ')}>
				{resources.map((resource) => (
					<li className={spacing.p_b_1} key={resource[1]}>
						<a href={resource[0]} target="blank">{resource[1]}</a>
					</li>
				))}
			</ul>
		</details>
	)
};

Resources.propTypes = {
	resources: PropTypes.array
};

export default Resources