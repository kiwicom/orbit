// @flow
import * as React from "react";

import Accordion from "../index";
import AccordionSection from "../AccordionSection/index";

export default {
  Example: (): React.Node => (
    <Accordion loading>
      <AccordionSection>Seat map outbound</AccordionSection>
      <AccordionSection>Seat map inbound</AccordionSection>
    </Accordion>
  ),
  info: {
    title: "Loading accordion",
    description:
      "Pass the loading prop if you need to wait for data to load before displaying the accordion.",
  },
};
