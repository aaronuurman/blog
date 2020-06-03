import React from 'react'
import PropTypes from 'prop-types'
import classes from './articles.module.css'

const Articles = ({cssClasses, children}) => (
  <div className={`${classes.articles} ${cssClasses.join(', ')}`}>
    {children}
  </div>
)

Articles.propTypes = {
  cssClasses: PropTypes.array,
  children: PropTypes.any,
}

Articles.defaultProps = {
  cssClasses: [],
}

export default Articles
