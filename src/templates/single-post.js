import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/seo/seo';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout  from '../components/layout/layout';
import spacing from '../styles/spacing.module.css';
import Article from '../components/article/article';
import TagsList from '../components/tags-list/tags-list';
//import Resources from '../components/resources'
import ImageModal from '../components/image-modal/image-modal';
import classes from '../styles/single-post-template.module.css';
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

	const shortcodes = { ImageModal };

	return (
		<>
		<Layout>
			<SEO title={title} />
			<Article cssClasses={[spacing.p_x_08]}>
				<section>
					<h1>{title}</h1>
					<TagsList tags={tags} />
				</section>
				<section>
					<Img className={[classes.article_cover]} fluid={image.childImageSharp.fluid} />
					<ImageAuthor author={imageAuthor} provider={imageProvider} />
				</section>
				<section className={[spacing.m_t_2]}>
					<MDXProvider components={shortcodes}>
						<MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
					</MDXProvider>
				</section>
			</Article>
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