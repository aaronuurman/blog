import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo/seo';
import { slugify } from '../utils/slugify';
import { camelize } from '../utils/camelize';
import Layout from '../components/layout/layout';
import spacing from '../styles/spacing.module.css';
import classes from '../components/tags-list/tags-list.module.css';

const tagsPage = ({ pageContext }) => {
	let { tags, tagPostCounts } = pageContext;
	let title = "All tags";	
	let searchKeyWords = [
		'tags',
		'topics'
	];

	let getTagClasses = (tag) => [
		classes[camelize(tag)],
		spacing.p_l_2, 
		spacing.p_y_1,
		spacing.p_r_1,
		spacing.m_x_1,
		spacing.m_y_1
	].join(' ');

	return (
		<Layout pageTitle={title}>
			<SEO title={title} keywords={searchKeyWords}/>
			<h1>{title}</h1>
			<div className={[classes.tags, classes.wrapper].join(' ')}>
				{tags.sort().map(tag => (
					<Link key={slugify(tag)} to={`/tag/${slugify(tag)}`}>
						<div key={tag} className={getTagClasses(tag)}>
							{tag}({tagPostCounts[tag]})
						</div>
					</Link>
				))}
			</div>
		</Layout>
	)
}

export default tagsPage;