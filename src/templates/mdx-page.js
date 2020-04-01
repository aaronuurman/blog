import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Layout from '../components/layout/layout';
import spacing from '../styles/spacing.module.css';
import Article from '../components/article/article';
import ImageModal from '../components/image-modal/image-modal';

const shortcodes = { Link, ImageModal };

export default ({ children }) => (
	<Layout>
		<Article cssClasses={[spacing.p_x_08, spacing.p_b_2]}>
			<MDXProvider components={shortcodes}>{children}</MDXProvider>
		</Article>
	</Layout>
);