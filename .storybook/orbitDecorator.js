import * as React from "react"
import Heading from "../src/Heading"
import Text from "../src/Text"
import Node from "@storybook/addon-info/dist/components/Node"
import Pre from "@storybook/addon-info/dist/components/markdown/pre/pre"

const orbitDecorator = (storyFn, context) => {

  const children = storyFn(context)

  return  (
    <div style={{ padding: "20px" }}>
      <Heading spaceAfter="medium">{context.kind}</Heading>
      <Text spaceAfter="largest">{context.parameters?.info}</Text>
      {children}
      <Pre>
        {React.Children.map(children, (root, idx) => (
          <Node
            key={idx}
            node={root}
            depth={0}
            maxPropsIntoLine={3}
            maxPropObjectKeys={1}
            maxPropArrayLength={3}
            maxPropStringLength={50}
          />
        ))}
      </Pre>

    </div>
  )
}

export default orbitDecorator
