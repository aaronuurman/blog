import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classes from './navigation.module.css';
import spacing from '../../styles/spacing.module.css';

const Navigation = ({ links, children }) => (
	<div className={[classes.menuwrap]}>
		<input type="checkbox" className={[classes.toggler]} />
		<div className={[classes.hamburger]}><div></div></div>
		<nav>
			<ul>
				{
					links.map((link, index) => {
						return <li className={[spacing.p_1]} key={index}><Link to={`/${link}`}>{link}</Link></li>
					})
				}
			</ul>
			{children}
		</nav>
	</div>
)

Navigation.propTypes = {
	links: PropTypes.array,
	children: PropTypes.any
}

Navigation.defaultProps = {
	links: [],
}

export default Navigation