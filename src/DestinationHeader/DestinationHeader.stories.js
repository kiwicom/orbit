// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs/react";

import DestinationHeader from "./index";

storiesOf("DestinationHeader", module).add("Playground", () => {
  const image = text("image", "dubai_ae");
  const destinationName = text("destinationName", "Dubai");
  const dataTest = text("dataTest", "test");
  return (
    (
      <DestinationHeader
        image={image}
        destinationName={destinationName}
        goBack={action("goBack")}
        dataTest={dataTest}
      />
    ),
    {
      info:
        "DestinationHeader is a component providing better visual recognition of city you have chosen. It is placed on the result page and users can easily get back to the serch page by clicking on the back button",
    }
  );
});
