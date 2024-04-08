import * as React from "react";
import jsxToString from "react-element-to-jsx-string";
import { Source } from "@storybook/blocks";

import defaultTheme from "../src/defaultTheme";
import OrbitProvider from "../src/OrbitProvider";
import Heading from "../src/Heading";
import Text from "../src/Text";

const OrbitDecorator = (storyFn, context) => {
  React.useEffect(() => {
    const html = document.querySelector("html");
    if (html && !html.getAttribute("dir")) html.setAttribute("dir", "ltr");
    return () => {
      if (html) html.removeAttribute("dir");
    };
  }, []);

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
    <OrbitProvider useId={React.useId} theme={{ ...defaultTheme }}>
      <div style={{ padding: "20px" }}>
        <Heading spaceAfter="medium" inverted={inverted}>
          {context.kind}
        </Heading>
        <Text spaceAfter="largest" type={inverted ? "white" : "primary"}>
          {context.parameters?.info}
        </Text>
        {children}
        <div style={{ marginTop: 20 }} dir="ltr">
          <Source code={jsxToString(children, options)} language="jsx" format={false} />
        </div>
      </div>
    </OrbitProvider>
  );
};

export default OrbitDecorator;
