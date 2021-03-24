import * as React from "react";
import { ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => <ButtonLink loading>Click me</ButtonLink>,
  info: {
    title: "Loading nutton link",
    description:
      "Loading button links are useful when content needs to be loaded before the user can take an action.",
  },
};
