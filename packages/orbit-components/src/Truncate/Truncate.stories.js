// @flow
import * as React from "react";
import { text } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Text from "../Text";

import Truncate from ".";

export default {
  title: "Truncate",
};

export const Default = () => {
  const content = text(
    "content",
    "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Sed ac dolor sit amet purus malesuada congue. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque pretium lectus id turpis. Etiam dictum tincidunt diam.",
  );
  return <Truncate>{content}</Truncate>;
};

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InStack = () => {
  const content = text(
    "content",
    "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Sed ac dolor sit amet purus malesuada congue. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque pretium lectus id turpis. Etiam dictum tincidunt diam.",
  );
  const maxWidth = text("maxWidth", "20%");
  return (
    <Stack direction="row">
      <Truncate maxWidth={maxWidth}>
        <Text>{content}</Text>
      </Truncate>
      <Truncate>
        <Text>{content}</Text>
      </Truncate>
    </Stack>
  );
};

InStack.story = {
  parameters: {
    info:
      "This is the configuration of this component in combination with Stack. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = () => {
  const content = text(
    "content",
    "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Sed ac dolor sit amet purus malesuada congue. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque pretium lectus id turpis. Etiam dictum tincidunt diam.",
  );
  const maxWidth = text("maxWidth", "none");
  return (
    <Truncate maxWidth={maxWidth}>
      <Text>{content}</Text>
    </Truncate>
  );
};

Playground.story = {
  parameters: {
    info:
      "This is the configuration of this component in combination with Stack. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Rtl = () => {
  const content = text(
    "content",
    "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Sed ac dolor sit amet purus malesuada congue. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque pretium lectus id turpis. Etiam dictum tincidunt diam.",
  );
  const maxWidth = text("maxWidth", "20%");
  return (
    <RenderInRtl>
      <Stack direction="row">
        <Truncate maxWidth={maxWidth}>
          <Text>{content}</Text>
        </Truncate>
        <Truncate>
          <Text>{content}</Text>
        </Truncate>
      </Stack>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
