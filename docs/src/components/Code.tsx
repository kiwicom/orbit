import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import styled, { css } from "styled-components";

export const InlineCode = styled.code`
  padding: 0.25em 0.5em;
  background: #ddd;
  border-radius: 0.5em;
  color: #000;
  /* monospace typefaces appear a bit larger */
  font-size: calc(1em - 2px);
  a & {
    color: currentColor;
  }
`;

interface CodeBlockProps {
  children: string;
  className?: string;
}
export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const language = className?.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={theme}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore avoid refining the string type to supported languages
      language={language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div
          css={css`
            border-radius: 0.5em;
            /* monospace typefaces appear a bit larger */
            font-size: calc(1em - 2px);
            overflow-x: auto;
          `}
          style={style}
        >
          <div
            css={css`
              display: inline-block;
              margin: 1rem;
            `}
          >
            {tokens
              .filter(line => line.some(token => !token.empty)) // remove mysterious empty lines
              .map((line, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}
    </Highlight>
  );
};
