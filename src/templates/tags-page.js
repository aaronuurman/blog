import React from 'react'
import { Link } from 'gatsby'
//import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import { slugify } from '../utils/slugify'

const tagsPage = ({ pageContext }) => {
  let { tags, tagPostCounts } = pageContext;

  return (
    <Layout pageTitle="All tags">
      <h1 className="pb-1">All tags</h1>
      <div className="tags">
        {tags.sort().map(tag => (
          <Link to={`/tag/${slugify(tag)}`}>
            <div key={tag} className={slugify(tag)}>
              {tag}({tagPostCounts[tag]})
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default tagsPage;