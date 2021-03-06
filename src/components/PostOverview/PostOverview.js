import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import {Article} from '../Article'
import {Tags} from '../Tags'
import {PostOverviewFooter} from '../PostOverviewFooter'

import classes from './postOverview.module.css'
import spacing from '../../styles/spacing.module.css'

const PostOverview = ({
  title,
  date,
  image,
  tags,
  slug,
  overview,
  timeToRead,
}) => (
  <Article cssClasses={[classes.postoverview]}>
    <Link to={slug}>
      <Img className={classes.cover} fluid={image} />
    </Link>
    <section className={[spacing.p_1]}>
      <Tags tags={tags} />
      <Link to={slug}>
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </Link>
    </section>
    <PostOverviewFooter date={date} timeToRead={timeToRead} />
  </Article>
)

PostOverview.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.object,
  tags: PropTypes.array,
  slug: PropTypes.string,
  overview: PropTypes.string,
  timeToRead: PropTypes.number,
}

export default PostOverview
