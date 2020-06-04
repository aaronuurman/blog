import React from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import {useLocation} from '@reach/router'
import {StaticQuery, graphql} from 'gatsby'

const SEO = ({title, description, image, keywords, article}) => {
  const {pathName} = useLocation()

  const helmet = (data) => {
    const seo = {
      title: title || data.site.siteMetadata.title,
      description: description || data.site.siteMetadata.description,
      image: `${data.site.siteMetadata.siteUrl}${
        image || data.site.siteMetadata.defaultImage
      }`,
      url: `${data.site.siteMetadata.siteUrl}${pathName}`,
      twitterUsername: data.site.siteMetadata.twitterUsername,
      author: data.site.siteMetadata.author,
      metaKeywords: {
        name: `keywords`,
        content:
          keywords && keywords.length > 0
            ? keywords.join(`, `)
            : ['software developer', 'blogger'],
      },
    }

    const metaData = [
      {
        name: `description`,
        content: seo.title,
      },
      {
        property: `og:title`,
        content: seo.title,
      },
      {
        property: `og:description`,
        content: seo.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: seo.author,
      },
      {
        name: `twitter:title`,
        content: seo.title,
      },
      {
        name: `twitter:description`,
        content: seo.description,
      },
    ]

    return (
      <Helmet
        title={seo.title}
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        meta={metaData}
      />
    )
  }

  return (
    <StaticQuery
      query={seoQuery}
      render={(data) => {
        return helmet(data)
      }}
    />
  )
}

const seoQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        twitterUsername
      }
    }
  }
`

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  keywords: null,
  article: false,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.array,
  article: PropTypes.bool,
}

export default SEO
