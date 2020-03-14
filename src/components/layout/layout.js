import React from 'react';
import '../../styles/main.css';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import Header from '../header/header';
import Container from '../container/container';
import Navigation from '../navigation/navigation';
import spacing from '../../styles/spacing.module.css';
import SocialMedia from '../social-media/social-media';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

const Layout = ({ children }) => {
	const {title, navbar, socialMedia} = useSiteMetadata();

	return (
		<>
			<Header siteTitle={title}>
				<Navigation links={navbar}/>
			</Header>
			<Container cssClasses={[spacing.p_y_2]}>
				{children}
			</Container>
			<Footer copyright={title}>
				<SocialMedia links={socialMedia}/>
			</Footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout