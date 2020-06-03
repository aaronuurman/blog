module.exports = {
	siteMetadata: {
		title: `Aaron Uurman`,
		description: `Software developer, blogger`,
		siteUrl: `https://www.aaronuurman.com`,
		author: `Aaron Uurman`,
		socialMedia:[
			`https://github.com/aaronuurman`,
			`https://www.linkedin.com/in/aaronuurman`,
			`https://twitter.com/aaronuurman`
		],
		navbar: [
			`tags`,
			`about`,
			`uses`,
			`cheatsheets`,
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
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Uurman`,
				short_name: `Aaron Uurman`,
				description: `Software developer, blogger`,
        start_url: `/`,
        background_color: `#0b56a5`,
        theme_color: `#0b56a5`,
				display: `standalone`,
				icon: `src/images/icon.png`,
				icons: [
					{
						src: `/favicons/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/favicons/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
					{
						src: `/favicons/apple-touch-icon.png`,
						sizes: `180x180`,
						type: `image/png`,
					},
					{
						src: `/favicons/favicon-32x32.png`,
						sizes: `32x32`,
						type: `image/png`,
					},
					{
						src: `/favicons/favicon-16x16.png`,
						sizes: `16x16`,
						type: `image/png`,
					},
				],
      },
    },
	],
};