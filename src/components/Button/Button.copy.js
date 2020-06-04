import React from 'react'
import PropTypes from 'prop-types'

import {copyToClipboard} from '../../utils'

import classes from './copy.module.css'

const Copy = (codeObject) => {
  const handleClick = () => {
    copyToClipboard(codeObject.codeObject)
  }

  return (
    <span
      role="button"
      tabIndex={0}
      className={classes.btn_copy}
      onClick={handleClick}
      onKeyDown={handleClick}>
      Copy
    </span>
  )
}

Copy.propTypes = {
  codeObject: PropTypes.object,
}

export default Copy
