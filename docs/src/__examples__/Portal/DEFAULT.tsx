import React from "react";
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
};
