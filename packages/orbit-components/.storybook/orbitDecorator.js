// @noflow
import * as React from "react";
import jsxToString from "react-element-to-jsx-string";
import { Code } from "@storybook/addon-info/dist/components/markdown/";

import Heading from "../src/Heading";
import Text from "../src/Text";

const orbitDecorator = (storyFn, context) => {
  const children = storyFn(context);
  const options = {
    filterProps: val => val != null && val !== "",
    functionValue: () => {
      return "function()";
    },
  };
  return (
    <div style={{ padding: "20px" }}>
      <Heading spaceAfter="medium">{context.kind}</Heading>
      <Text spaceAfter="largest">{context.parameters?.info}</Text>
      {children}
      {process.env.NODE_ENV !== "loki" ? (
        <div style={{ marginTop: 20 }}>
          <Code code={jsxToString(children, options)} language="jsx" format={false} />
        </div>
      ) : null}
    </div>
  );
};

export default orbitDecorator;
