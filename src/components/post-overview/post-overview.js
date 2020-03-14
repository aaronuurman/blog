import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import classes from './post-overview.module.css'
//import TagsList from '../tags-list/tags-list'

const PostOverview = ({ title, date, image, slug, overview, timeToRead }) => (
	<article>
		<Link to={slug}>
			<Img className={[classes.cover]} fluid={image} />
		</Link>
		<section>
			<Link to={slug}>
				<div>
					<h2>{title}</h2>
					<p>{overview}</p>
				</div>
			</Link>
			<div className={[classes.overviewfooter]}>
				<div>{date}</div>
				<div>{timeToRead} min read</div>
			</div>
		</section>
	</article>
)

export default PostOverview