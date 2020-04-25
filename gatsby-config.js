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
				defaultLayouts: {
          default: require.resolve('./src/templates/mdx-page.js'),
        },
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-plantuml'
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 980,
						},
					},
					{
						resolve: "gatsby-remark-external-links",
						options: {
							target: "_blank",
							rel: "nofollow"
						}
					}
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
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
	],
};