const _ = require('lodash')
const path = require(`path`);
const { slugify } = require('./src/utils/slugify');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const templates = {
		singlePost: path.resolve('./src/templates/single-post.js'),
		tagsPage: path.resolve('./src/templates/tags-page.js'),
		tagPage: path.resolve('./src/templates/tag-page.js')
	}

	return graphql(`
		{
			allMdx {
				nodes {
					fields {
						slug
					}
					frontmatter {
						title
						tags
					}
				}
			}
		}

	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		const posts = result.data.allMdx.nodes;
		// create page for each mdx file
		posts.forEach(post => {
			createPage({
				path: post.fields.slug,
				component: templates.singlePost,
				context: {
					slug: post.fields.slug,
				},
			});
		});

		// Get all tags
		let tags = []
		_.each(posts, edge => {
			if (_.get(edge, 'node.frontmatter.tags')) {
				tags = tags.concat(edge.node.frontmatter.tags)
			}
		});

		// Count each unique tag
		let tagPostCounts = {}
		tags.forEach(tag => {
			tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
		});

		tags = _.uniq(tags)

		// Create tags page
		createPage({
			path: `/tags`,
			component: templates.tagsPage,
			context: {
				tags,
				tagPostCounts
			}
		});

		// Create tag page
		tags.forEach(tag => {
			createPage({
				path: `/tag/${slugify(tag)}`,
				component: templates.tagPage,
				context: {
					tag
				}
			})
		});
	});
};

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'Mdx') {
		const slugFromTitle = slugify(node.frontmatter.title)
		createNodeField({
			node,
			name: 'slug',
			value: slugFromTitle
		})
	}
}