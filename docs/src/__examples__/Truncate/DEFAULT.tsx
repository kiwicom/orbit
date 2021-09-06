import React from "react";
import { Button, Stack, Text, Truncate } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showAll, setShowAll] = React.useState(false);
    const textToShow = `When you’re using progressive disclosure, you might have text that you’ve
    decided is too long to display all at once. You don’t want to overwhelm your users,
    so you want to keep it hidden but accessible. Use a Truncate component to make sure your
    text fits within its parent and doesn’t take over your designs.`;
    return (
      <Stack>
        {showAll ? (
          <Text>{textToShow}</Text>
        ) : (
          <Truncate>
            <Text>{textToShow}</Text>
          </Truncate>
        )}
        <Button onClick={() => setShowAll(!showAll)}>{showAll ? "Hide" : "Show"} all text</Button>
      </Stack>
    );
  },
  info: {
    title: "Default truncate",
    description:
      "By default, truncate components will limit their children to 100% of the parent width.",
  },
};
