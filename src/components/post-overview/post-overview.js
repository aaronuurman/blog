import React from 'react'
import { Link } from 'gatsby'
//import Img from 'gatsby-image'
//import TagsList from '../tags-list/tags-list'

const PostOverview = ({ title, date, slug, overview, timeToRead }) => (
	<article>
		<Link to={slug}>
		</Link>
		<section className="p-1">
			<Link to={slug}>
				<div>
					<h2>{title}</h2>
					<p>{overview}</p>
				</div>
			</Link>
			<div className="overview-footer mt-2">
				<div>{date}</div>
				<div>{timeToRead} min read</div>
			</div>
		</section>
	</article>
)

export default PostOverview