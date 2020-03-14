import React from 'react';
import SEO from '../components/seo/seo';
import Layout  from '../components/layout/layout';
import classes from '../styles/pages/index.module.css';
import PostOverview from '../components/post-overview/post-overview';

export default ({data}) => {
	console.log(data.allMdx.nodes);
	return (
		<>
		<Layout>
			<SEO title="Latest blog posts" />
			<div className={[classes.articles]}>
				{data.allMdx.nodes.map(({ 
					id, 
					excerpt, 
					frontmatter, 
					timeToRead, 
					fields,
				}) => (
					<PostOverview
						key={id}
						title={frontmatter.title}
						date={frontmatter.date}
						image={frontmatter.image.childImageSharp.fluid}
						tags={frontmatter.tags}
						overview={excerpt}
						timeToRead={timeToRead}
						slug={fields.slug}
					/>
				))}
			</div>
		</Layout>
		</>
	);
};

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
		) {
			nodes {
				id
				excerpt(pruneLength: 250)
				frontmatter {
					title
					date(formatString: "MMM Do YYYY")
					resources
					image {
						childImageSharp {
							fluid(fit: COVER){
								...GatsbyImageSharpFluid
							}
						}
					}
					imageAuthor
					imageProvider
					tags
				}
				timeToRead
				fields {
					slug
				}
			}
		}
	}
`;
