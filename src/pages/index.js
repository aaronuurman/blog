import React from 'react'

import {Layout, SEO, Articles, PostOverview} from '../components'

export default ({data}) => {
  let title = 'Latest blog posts'

  return (
    <>
      <Layout>
        <SEO title={title} />
        <Articles>
          {data.allMdx.nodes.map(
            ({id, excerpt, frontmatter, timeToRead, fields}) => (
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
            ),
          )}
        </Articles>
      </Layout>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
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
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
`
