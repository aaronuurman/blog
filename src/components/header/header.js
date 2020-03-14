import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classes from './header.module.css';
import spacing from '../../styles/spacing.module.css';

const Header = ({ siteTitle, children }) => (
	<header>
		<div className={[classes.container, spacing.p_x_08].join(' ')}>
			<h2><Link to="/">{siteTitle}</Link></h2>
			{children}
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	children: PropTypes.any
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header