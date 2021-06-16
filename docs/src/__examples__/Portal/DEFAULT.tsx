import * as React from "react";
import { Button, Portal, Stack, Text, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showContent, setShowContent] = React.useState(false);
    return (
      <>
        <Portal renderInto="docs-example">
          {showContent && (
            <Stack>
              <Text>
                For more on portals and how they work, read the{" "}
                <TextLink href="https://reactjs.org/docs/portals.html" external>
                  React docs on portals.
                </TextLink>
              </Text>
              <Button
                onClick={() => {
                  setShowContent(false);
                }}
              >
                Hide content
              </Button>
            </Stack>
          )}
        </Portal>
        {!showContent && (
          <Button
            onClick={() => {
              setShowContent(true);
            }}
          >
            Show content
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Default portal",
    description:
      "By default, portal inserts its children into a separate div created for the purpose. Events on a child still bubble to the React parent (even thought it's not a child in the DOM).",
  },
};
