import React from 'react'
import {graphql} from 'gatsby'

import {Layout, SEO, Articles, PostOverview} from '../components'

const tagPage = ({data, pageContext}) => {
  const {tag} = pageContext
  const {totalCount} = data.allMdx
  const title = `Post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout pageTitle={title}>
      <SEO title={title} />
      <h1>{title}</h1>

      <Articles>
        {data.allMdx.edges.map(({node}) => (
          <PostOverview
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            image={node.frontmatter.image.childImageSharp.fluid}
            tags={node.frontmatter.tags}
            slug={node.fields.slug}
            overview={node.excerpt}
            timeToRead={node.timeToRead}
          />
        ))}
      </Articles>
    </Layout>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(fromNow: true, formatString: "DD MMM YYYY")
            tags
            resources
            image {
              childImageSharp {
                fluid(fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default tagPage
