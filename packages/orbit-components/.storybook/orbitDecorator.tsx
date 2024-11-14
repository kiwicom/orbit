import * as React from "react";
import type { Decorator } from "@storybook/react";
import jsxToString from "react-element-to-jsx-string";
import { Highlight, themes } from "prism-react-renderer";

import defaultTheme from "../src/defaultTheme";
import OrbitProvider from "../src/OrbitProvider";
import Heading from "../src/Heading";
import Text from "../src/Text";
import Tile from "../src/Tile";

const OrbitDecorator: Decorator = (storyFn, context) => {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    const html = document.querySelector("html");
    if (html && !html.getAttribute("dir")) html.setAttribute("dir", "ltr");
    return () => {
      if (html) html.removeAttribute("dir");
    };
  }, []);

  const handleCopyCode = (codeToCopy: string) => {
    navigator.clipboard.writeText(codeToCopy);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const children = storyFn(context);
  const { globals } = context;
  const options = {
    filterProps: val => val != null && val !== "",
    functionValue: () => {
      return "function()";
    },
  };

  const inverted = globals.backgrounds ? globals.backgrounds.value === "#333333" : undefined;
  const code = jsxToString(children, options);

  return (
    <OrbitProvider useId={React.useId} theme={{ ...defaultTheme }}>
      <div style={{ padding: "20px" }}>
        <Heading as="h1" spaceAfter="medium" inverted={inverted}>
          {context.kind}
        </Heading>
        <Text spaceAfter="largest" type={inverted ? "white" : "primary"}>
          {context.parameters?.info}
        </Text>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="story-content">{children}</div>
        <div dir="ltr" className="mt-600 relative">
          <Tile>
            <Highlight theme={themes.vsLight} code={code} language="tsx">
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className="text-small overflow-x-auto" style={style}>
                  {tokens.map((line, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </Tile>
          <div className="absolute bottom-0 right-0">
            <button
              className="text-small py-100 px-200 text-ink-dark font-bold"
              onClick={() => handleCopyCode(code)}
              type="button"
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </OrbitProvider>
  );
};

export default OrbitDecorator;
