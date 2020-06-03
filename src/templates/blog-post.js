import React from 'react'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import Seo from '../components/seo/seo'
import {MDXProvider} from '@mdx-js/react'
import {DiscussionEmbed} from 'disqus-react'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout/layout'
import spacing from '../styles/spacing.module.css'
import Article from '../components/article/article'
import TagsList from '../components/tags-list/tags-list'
import Resources from '../components/resources/resources'
import Modal from '../components/modal/modal'
import classes from '../styles/single-post-template.module.css'
import ImageAuthor from '../components/image-author/image-author'

export default ({data}) => {
  const {
    title,
    image,
    imageAuthor,
    imageProvider,
    resources,
    tags,
  } = data.mdx.frontmatter

  const {slug} = data.mdx.fields.slug

  const shortcodes = {Modal}

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {identifier: slug, title},
  }

  return (
    <Layout>
      <Seo title={title} image={image.publicURL} article={true} />
      <Article cssClasses={[spacing.p_x_08]}>
        <section>
          <h1>{title}</h1>
          <TagsList tags={tags} />
        </section>
        <section>
          <Img
            className={[classes.article_cover]}
            fluid={image.childImageSharp.fluid}
          />
          <ImageAuthor author={imageAuthor} provider={imageProvider} />
        </section>
        <section className={[spacing.m_t_2]}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={data.mdx.frontmatter}>
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </section>
        <Resources resources={resources} />
        <DiscussionEmbed {...disqusConfig} />
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query blogPostBySlug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        tags
        resources
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAuthor
        imageProvider
      }
      fields {
        slug
      }
    }
  }
`
