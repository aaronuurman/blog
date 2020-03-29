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
      throw result.errors
    }

		const posts = result.data.allMdx.nodes;
		let tags = [];
		// create page for each mdx file
		posts.forEach(post => {
			tags = tags.concat(post.frontmatter.tags)
			createPage({
				path: post.fields.slug,
				component: templates.singlePost,
				context: {
					slug: post.fields.slug,
				},
			});
		});

		// Count each unique tag
		let tagPostCounts = {}
		tags.forEach(tag => {
			tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
		});

		//Unique
		tags = tags.filter((v, i, a) => a.indexOf(v) === i);

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