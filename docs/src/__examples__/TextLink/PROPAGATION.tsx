import * as React from "react";
import { Button, Stack, Text, TextLink, Tile } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [text, setText] = React.useState("");
    return (
      <Stack>
        <Tile
          title="Clickable container"
          description="Click me to see the actions below."
          onClick={() => setText(prevText => `${prevText} clicked`)}
        >
          <Stack direction="column">
            <TextLink stopPropagation>Link that will not propagate</TextLink>
            <TextLink>Link that will propagate</TextLink>
          </Stack>
        </Tile>
        {text && (
          <Stack direction="column">
            <Button onClick={() => setText("")} type="secondary">
              Clear actions
            </Button>
            <Text>{text}</Text>
          </Stack>
        )}
      </Stack>
    );
  },
  info: {
    title: "Propagation",
    description:
      "To have clicks on text links not bubble up to their containers, use the stopPropagation prop. Otherwise, clicks will propagation and affect both parent and child components.",
  },
};
