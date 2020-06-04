import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

import {slugify, camelize} from '../../utils'

import classes from './tags.module.css'
import spacing from '../../styles/spacing.module.css'

const Tags = ({tags}) => {
  if (tags === undefined || tags.length === 0) {
    return null
  }

  return (
    <div className={[classes.tags]}>
      {tags.sort().map((tag, index) => (
        <Link key={index} to={`/tag/${slugify(tag)}`}>
          <div
            className={[
              classes[camelize(tag)],
              spacing.p_l_2,
              spacing.p_r_08,
              spacing.p_y_04,
            ].join(' ')}>
            {tag}
          </div>
        </Link>
      ))}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
}

export default Tags
