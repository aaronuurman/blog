const path = require(`path`)
const {slugify} = require('./src/utils/slugify')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const templates = {
    singlePost: path.resolve('./src/templates/blog-post.js'),
    tagsPage: path.resolve('./src/templates/tags-page.js'),
    tagPage: path.resolve('./src/templates/tag-page.js'),
  }

  return graphql(`
    {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
        edges {
          node {
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
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.edges

    let tags = []
    // create page for each mdx file
    posts.forEach((post) => {
      tags = tags.concat(post.node.frontmatter.tags)
      createPage({
        path: post.node.fields.slug,
        component: templates.singlePost,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    tags = tags.filter(function (el) {
      return el != null
    })

    // Count each unique tag
    let tagPostCounts = {}
    tags.forEach((tag) => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    //Unique
    tags = tags.filter((v, i, a) => a.indexOf(v) === i)

    // Create tags page
    createPage({
      path: `/tags`,
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    // Create tag page
    tags.forEach((tag) => {
      const tagPath = `/tag/${slugify(tag)}`
      createPage({
        path: tagPath,
        component: templates.tagPage,
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
