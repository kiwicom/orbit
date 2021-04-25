import * as React from "react";
import { Accordion, AccordionSection } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
