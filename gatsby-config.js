module.exports = {
	siteMetadata: {
		title: `Aaron Uurman`,
		description: `Software developer, blogger`,
		siteUrl: `https://aaronuurman.com`,
		author: `Aaron Uurman`,
		socialMedia:[
			`https://github.com/aaronuurman`,
			`https://www.linkedin.com/in/aaronuurman`,
			`https://twitter.com/aaronuurman`
		],
		navbar: [
			`tags`,
			`about`,
			`contact`
		]
	},

	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-graph',
						options: {
							// this is the language in your code-block that triggers mermaid parsing
							language: 'mermaid', // default
							theme: 'neutral' // could also be dark, forest, or neutral
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 980,
						},
					},
				],				
				plugin: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 980,
						},
					},
				],
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: `posts`,
			},
		},
	],

};