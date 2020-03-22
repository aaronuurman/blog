import React from 'react';
import classes from './code.module.css';
import CopyCode from '../copy-code/copy-code';
import spacing from '../../styles/spacing.module.css';
import theme from 'prism-react-renderer/themes/nightOwl';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Code = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <div className={classes.code_wrapper}>
          <CopyCode codeObject={codeString} />
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
  );
};

export default Code;