import React from "react";

import Text from "../Text";
import Stack from "../Stack";
import Heading from "../Heading";

import Truncate from ".";

export default function TileStory() {
  const content =
    "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Sed ac dolor sit amet purus malesuada congue. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque pretium lectus id turpis. Etiam dictum tincidunt diam.";

  return (
    <div className="space-y-300">
      <Truncate maxWidth="20%">
        <Text>{content}</Text>
      </Truncate>
      <Stack direction="row">
        <Truncate maxWidth="20%">
          <Text>{content}</Text>
        </Truncate>
        <Truncate maxWidth="50%">
          <Text>{content}</Text>
        </Truncate>
        <Truncate>
          <Text>{content}</Text>
        </Truncate>
      </Stack>
      <Truncate maxWidth="60%">
        <Heading>This is a Heading component inside a Truncate</Heading>
      </Truncate>
    </div>
  );
}
