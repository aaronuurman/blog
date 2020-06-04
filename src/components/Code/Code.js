import React from 'react'
import PropTypes from 'prop-types'
import theme from 'prism-react-renderer/themes/nightOwl'
import Highlight, {defaultProps} from 'prism-react-renderer'

import {Button} from '../Button'

import classes from './code.module.css'
import spacing from '../../styles/spacing.module.css'

const Code = ({codeString, language}) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className={classes.code_wrapper}>
          <Button.Copy codeObject={codeString} />
          <pre
            className={[
              className,
              classes.code,
              spacing.m_y_1,
              spacing.p_1,
            ].join(' ')}
            style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({line, key: i})}>
                <span className={classes.line_nr}>{i + 1}</span>
                {line.map((token, key) => (
                  <span {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

Code.propTypes = {
  codeString: PropTypes.object,
  language: PropTypes.string,
}

export default Code
