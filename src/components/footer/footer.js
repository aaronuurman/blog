import React from 'react'
import PropTypes from 'prop-types'
import classes from './footer.module.css'

const Footer = ({copyright, children}) => (
  <footer>
		<div className={classes.container}>
			<div>
				Copyright © {new Date().getFullYear()} {copyright}
			</div>
			{children}
		</div>
  </footer>
)

Footer.propTypes = {
	copyright: PropTypes.string,
	children: PropTypes.any
}

export default Footer