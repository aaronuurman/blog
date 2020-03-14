import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import TagsList from '../tags-list/tags-list';
import classes from './post-overview.module.css';
import spacing from '../../styles/spacing.module.css';

const PostOverview = ({ title, date, image, tags, slug, overview, timeToRead }) => (
	<article>
		<Link to={slug}>
			<Img className={[classes.cover]} fluid={image} />
		</Link>
		<section className={[spacing.p_1]}>
			<TagsList tags={tags} />
			<Link to={slug}>
				<div>
					<h2 className={[spacing.m_y_1]}>{title}</h2>
					<p>{overview}</p>
				</div>
			</Link>
			<div className={[classes.overviewfooter, spacing.m_t_2].join(' ')}>
				<div>{date}</div>
				<div>{timeToRead} minutes to read</div>
			</div>
		</section>
	</article>
)

export default PostOverview