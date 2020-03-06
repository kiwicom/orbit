import * as React from "react"
import Heading from "../src/Heading"
import Text from "../src/Text"
import jsxToString from "react-element-to-jsx-string"
import { Code } from "@storybook/addon-info/dist/components/markdown/"

const orbitDecorator = (storyFn, context) => {
  const children = storyFn(context)
  const options = {
    filterProps: val => val != null && val !== "",
    functionValue: () => {
      return "function()";
    },
  };
  return  (
    <div style={{ padding: "20px" }}>
      <Heading spaceAfter="medium">{context.kind}</Heading>
      <Text spaceAfter="largest">{context.parameters?.info}</Text>
      {children}
      <div style={{ marginTop: 20}}>
        <React.Fragment>
          <Code code={jsxToString(children, options)} language="jsx" format={false} />
        </React.Fragment>
      </div>
    </div>
  )
}

export default orbitDecorator
