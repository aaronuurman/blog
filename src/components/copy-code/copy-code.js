import React from 'react'
import PropTypes from 'prop-types'
import classes from './copy-code.module.css'
import {copyToClipboard} from '../../utils/copy-to-clipboard'

const CopyCode = (codeObject) => {
  const handleClick = () => {
    copyToClipboard(codeObject.codeObject)
  }

  return (
    <span className={classes.btn_copy} onClick={handleClick}>
      Copy
    </span>
  )
}

CopyCode.propTypes = {
  codeObject: PropTypes.object,
}

export default CopyCode
