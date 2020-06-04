import React from 'react'
import PropTypes from 'prop-types'

import classes from './imageAuthor.module.css'

const ImageAuthor = ({author, provider}) => {
  if (
    (!author || author.length === 0) &&
    (!provider || provider.length === 0)
  ) {
    return null
  }

  if ((!author || author.length === 0) && (provider || provider.length !== 0)) {
    return (
      <div className={[classes.imgprovider]}>
        Photo by:{' '}
        <a href={provider[1]} target="blank">
          {provider[0]}
        </a>
      </div>
    )
  }

  return (
    <div className={[classes.imgprovider]}>
      Photo by:{' '}
      <a href={author[1]} target="blank">
        {author[0]}
      </a>{' '}
      /{' '}
      <a href={provider[1]} target="blank">
        {provider[0]}
      </a>
    </div>
  )
}

ImageAuthor.propTypes = {
  author: PropTypes.array,
  provider: PropTypes.array,
}

export default ImageAuthor
