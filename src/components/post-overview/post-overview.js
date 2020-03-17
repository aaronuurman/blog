import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import TagsList from '../tags-list/tags-list';
import classes from './post-overview.module.css';
import spacing from '../../styles/spacing.module.css';
import PostOverviewFooter from '../post-overview-footer/post-overview-footer';

const PostOverview = ({ title, date, image, tags, slug, overview, timeToRead }) => (
	<article className={[classes.postoverview]}>
		<Link to={slug}>
			<Img className={[classes.cover]} fluid={image} />
		</Link>
		<section className={[spacing.p_1]}>
			<TagsList tags={tags} />
			<Link to={slug}>
				<div>
					<h2>{title}</h2>
					<p>{overview}</p>
				</div>
			</Link>
			<PostOverviewFooter date={date} timeToRead={timeToRead} />
		</section>
	</article>
)

export default PostOverview