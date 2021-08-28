import theme from 'prism-react-renderer/themes/nightOwl'
import Highlight, { defaultProps } from 'prism-react-renderer'

import classes from './code.module.css'
import spacing from '../../styles/spacing.module.css'
import { ButtonCopy } from '../Buttons'

interface Props {
    codeString: string
    language: string
}

const Code = ({ codeString, language }: Props) => {
    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className={classes.code_wrapper}>
                    <ButtonCopy codeObject={codeString} />
                    <pre className={[className, classes.code, spacing.m_y_1, spacing.p_1].join(' ')} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                <span className={classes.line_nr}>{i + 1}</span>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                </div>
            )}
        </Highlight>
    )
}

export default Code