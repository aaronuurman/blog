import React from 'react'
import PropTypes from 'prop-types'

import spacing from '../../styles/spacing.module.css'
import classes from './postOverviewFooter.module.css'

const PostOverviewFooter = ({date, timeToRead}) => {
  let minText = timeToRead === 1 ? 'minute' : 'minutes'
  return (
    <div
      className={[
        classes.post_overview_footer,
        spacing.p_1,
        spacing.m_t_2,
      ].join(' ')}>
      <div>{date}</div>
      <div>
        {timeToRead} {minText} to read
      </div>
    </div>
  )
}

PostOverviewFooter.propTypes = {
  date: PropTypes.string,
  timeToRead: PropTypes.number,
}

export default PostOverviewFooter
