import React from 'react';
import Layout  from '../components/layout/layout';
import PostOverview from '../components/post-overview/post-overview';

export default ({data}) => {
	return (
		<>
		<Layout>
			<div className="articles">
				{data.allMdx.nodes.map(({ id, excerpt, frontmatter, timeToRead, fields }) => (
					<PostOverview
						key={id}
						title={frontmatter.title}
						date={frontmatter.date}
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
					date
				}
				fields {
					slug
				}
			}
		}
	}
`;
