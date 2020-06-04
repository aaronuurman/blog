import React from 'react'
import PropTypes from 'prop-types'

//This need to be defined here as long as I don't figure out how to automatically import CSS modules
// eslint-disable-next-line no-unused-vars
import classes from './article.module.css'

const Article = ({cssClasses, children}) => (
  <article className={cssClasses.join(' ')}>{children}</article>
)

Article.propTypes = {
  cssClasses: PropTypes.array,
  children: PropTypes.any,
}

Article.defaultProps = {
  cssClasses: [],
}

export default Article
