import React from 'react'
import PropTypes from 'prop-types'
import classes from './container.module.css'

const Container = ({cssClasses, children }) => (
	<div className={`${classes.container} ${cssClasses.join(', ')}`}>
		{children}
	</div>
)

Container.propTypes = {
	cssClasses: PropTypes.array,
	children: PropTypes.any
}

Container.defaultProps = {
	cssClasses: [],
}

export default Container