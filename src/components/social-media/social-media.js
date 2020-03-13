import React from 'react'
import PropTypes from 'prop-types'
import classes from './social-media.module.css'
import {extractHost} from '../../utils/url-helper'

const SocialMedia = ({links}) => (
	<ul className={classes.socialmedia}>
				{
					links.map((link, index) => {
						let text = extractHost(link)
						return <li key={index} ><a className={classes[text]} href={`${link}`} target="blank" ><i className={`fa fa-lg fa-${text}`}/></a></li>
					})
				}
	</ul>
)

SocialMedia.propTypes = {
	links: PropTypes.array,
}

SocialMedia.defaultProps = {
	links: [],
}

export default SocialMedia