import * as React from "react";
import { Loading } from "@kiwicom/orbit-components";

export default {
  Example: () => <Loading type="pageLoader" />,
  info: {
    title: "Default loading",
    description:
      "By default, a loading component is a page loader with only animation and no text.",
  },
};
