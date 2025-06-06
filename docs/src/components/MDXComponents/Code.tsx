import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import type { Props } from "@theme/MDXComponents/Code";

export const InlineCode = ({ children }: Props) => {
  return (
    <code className="rounded-150 py-100 px-150 text-small bg-[#ddd] text-[#000] [a_&]:text-current">
      {children}
    </code>
  );
};

export const CodeBlock = ({ children, className }: Props) => {
  const language = className?.replace(/language-/, "") || "";
  return (
    <pre className="bg-transparent p-0">
      <Highlight
        code={children as string}
        theme={themes.oceanicNext}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore avoid refining the string type to supported languages
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div className="rounded-200 overflow-x-auto text-[14px]" style={style}>
            <div className="m-400 inline-block">
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
    </pre>
  );
};
