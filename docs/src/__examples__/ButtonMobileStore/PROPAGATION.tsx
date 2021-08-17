import React from "react";
import { Button, Heading, Stack, Text, ButtonMobileStore, Tile } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [text, setText] = React.useState("");
    return (
      <Stack>
        <Tile
          title="Clickable container"
          description="Click me to see the actions below."
          onClick={() => setText(prevText => `${prevText} clicked card`)}
        >
          <Stack direction="column">
            <Stack>
              <Heading as="h3" type="title3">
                Button that will not propagate
              </Heading>
              <ButtonMobileStore stopPropagation type="googlePlay" />
            </Stack>
            <Stack>
              <Heading as="h3" type="title3">
                Button that will propagate
              </Heading>
              <ButtonMobileStore type="googlePlay" />
            </Stack>
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
      "To have clicks on mobile store buttons not bubble up to their containers, use the <code>stopPropagation</code> prop. Otherwise, clicks will propagation and affect both parent and child components.",
  },
};
