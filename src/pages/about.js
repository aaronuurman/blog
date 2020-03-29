import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/seo/seo';
import Layout from '../components/layout/layout';
import spacing from '../styles/spacing.module.css';

const AboutPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="About Me" />
			<article className={[spacing.p_x_1, spacing.p_b_2].join(' ')}>
				<h1>About Me</h1>
				<p>Hello everyone!</p><br />
				<p>I'm Aaron Uurman, a software developer living and working in Estonia.</p>
				<p>I got started in software development rather late, after the second semester at university. From that on I have never thought about doing something else, I really enjoy life as a developer. I have been software developer on Microsoft stack for more than 3 years and I like it.
						 On my free time, I enjoy playing disc-golf, running or hiking.</p>

				<Img className={spacing.m_y_2} fluid={data.image.childImageSharp.fluid} />
				<p>The picture above is taken in Tour du Mount Blanc.</p><br />

				<p>This blog purpose is to share knowledge and experience I came across in my career by providing some tutorials and know-how via blog posts.
						If you find that something can be done better or this content is useful then please don't hesitate to let me know, I would like to hear your opinion.</p>
			</article>
		</Layout>
	)
};

export const query = graphql`
	query {
		image: file(relativePath: {eq: "mont_blanc.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 980) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}	
`

export default AboutPage