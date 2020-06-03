import React from 'react'
import PropTypes from 'prop-types'
import classes from './footer.module.css'
import spacing from '../../styles/spacing.module.css'

const Footer = ({copyright, children}) => (
  <footer className={spacing.p_y_2}>
    <div className={[classes.container, spacing.p_x_08].join(' ')}>
      <div>
        Copyright © {new Date().getFullYear()} {copyright}
      </div>
      {children}
    </div>
  </footer>
)

Footer.propTypes = {
  copyright: PropTypes.string,
  children: PropTypes.any,
}

export default Footer
