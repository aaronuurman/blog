import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/code/code';

const components = {
	'p.inlineCode': props => (
		<code style={{ backgroundColor: 'lightgray' }} {...props} />
	),
	pre: ({children: {props}}) => {		
		if (props.mdxType === 'code') {
			return (
				<Code 
					codeString={props.children.trim()}
					language={
						props.className && 
						props.className.replace('language-', '')
					}
					{...props}
				/>
			);
		}
	},
};

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>{element}</MDXProvider>
);