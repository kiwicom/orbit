import React from "react";
import { Heading, Separator, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <>
      <Heading spaceAfter="large">Normal</Heading>
      <Text spaceAfter="normal">
        When there’s a lot of content in one place, it can help to have it all clearly organized.
      </Text>
      <Separator />
      <Text spaceAfter="largest">
        Separators help you keep all related content together visually and semantically so users
        know where to focus their attention.
      </Text>
      <Heading spaceAfter="large">Largest</Heading>
      <Text spaceAfter="normal">
        When there’s a lot of content in one place, it can help to have it all clearly organized.
      </Text>
      <Separator spaceAfter="largest" />
      <Text spaceAfter="largest">
        Separators help you keep all related content together visually and semantically so users
        know where to focus their attention.
      </Text>
      <Heading spaceAfter="large">Smallest</Heading>
      <Text spaceAfter="normal">
        When there’s a lot of content in one place, it can help to have it all clearly organized.
      </Text>
      <Separator spaceAfter="smallest" />
      <Text spaceAfter="largest">
        Separators help you keep all related content together visually and semantically so users
        know where to focus their attention.
      </Text>
    </>
  ),
  info: {
    title: "Space after",
    description:
      "To increase or decrease the visual separation, use teh <code>spaceAfter</code> prop.",
  },
};
