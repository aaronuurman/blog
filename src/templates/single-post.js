import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/seo/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout  from '../components/layout/layout';
import TagsList from '../components/tags-list/tags-list';
//import Resources from '../components/resources'
import ImageAuthor from '../components/image-author/image-author';

export default ({data}) => {
	const	{ 
		title, 
		image, 
		imageAuthor, 
		imageProvider, 
		resources, 
		tags 
	} = data.mdx.frontmatter;

	const { slug } = data.mdx.fields.slug;

	return (
		<>
		<Layout>
			<SEO title={title} />
			<article>
				<div className='article-header'>
					<h1 className="pb-1">{title}</h1>
					<TagsList tags={tags} />
				</div>
				<div className="pb-1">
					<Img fluid={image.childImageSharp.fluid} />
					<ImageAuthor author={imageAuthor} provider={imageProvider} />
				</div>
				<section>
					<MDXRenderer>{data.mdx.body}</MDXRenderer>
				</section>
			</article>
		</Layout>
		</>
	);
};


export const query = graphql`
 query blogPostBySlug($slug: String!){
	 mdx(fields: { slug: { eq: $slug }}){
		 id
		 body
		 frontmatter{
			 title
			 date(formatString: "MMM Do YYYY")
			 tags
			 resources
			 image {
				childImageSharp {
					fluid(maxWidth: 980){
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