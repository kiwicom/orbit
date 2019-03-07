import * as React from "react"
import Heading from "../src/Heading"
import Text from "../src/Text"

const orbitDecorator = (storyFn, context) => {
  return  (
    <div style={{ padding: "20px" }}>
      <Heading spaceAfter="medium">{context.kind}</Heading>
      <Text spaceAfter="largest">{context.parameters?.info}</Text>
      {storyFn(context)}
    </div>
  )
}

export default orbitDecorator
