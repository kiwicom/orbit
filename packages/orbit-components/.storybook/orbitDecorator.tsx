import * as React from "react";
import jsxToString from "react-element-to-jsx-string";
import { Code } from "@storybook/addon-info/dist/components/markdown";

import defaultTheme from "../src/defaultTheme";
import ThemeProvider from "../src/ThemeProvider";
import Heading from "../src/Heading";
import Text from "../src/Text";

const orbitDecorator = (storyFn, context) => {
  const children = storyFn(context);
  const { globals } = context;
  const options = {
    filterProps: val => val != null && val !== "",
    functionValue: () => {
      return "function()";
    },
  };

  const inverted = globals.backgrounds ? globals.backgrounds.value === "#333333" : undefined;

  return (
    <ThemeProvider theme={{ ...defaultTheme }}>
      <div style={{ padding: "20px" }}>
        <Heading spaceAfter="medium" inverted={inverted}>
          {context.kind}
        </Heading>
        <Text spaceAfter="largest" type={inverted ? "white" : "primary"}>
          {context.parameters?.info}
        </Text>
        {children}
        {process.env.NODE_ENV !== "loki" ? (
          <div style={{ marginTop: 20 }}>
            <Code code={jsxToString(children, options)} language="jsx" format={false} />
          </div>
        ) : null}
      </div>
    </ThemeProvider>
  );
};

export default orbitDecorator;
