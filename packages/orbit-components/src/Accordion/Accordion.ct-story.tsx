import React from "react";

import Button from "../Button";
import Text from "../Text";

import Accordion, { AccordionSection } from ".";

/* eslint-disable orbit-components/unique-id */

export default function AccordionVisualTest() {
  return (
    <div className="space-y-400">
      <Accordion>
        <AccordionSection id="0X0" header={<Text type="primary">Expandable</Text>}>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection id="0X2" expandable={false} header={<Text type="primary">Static</Text>}>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X3"
          header={<Text type="primary">Custom action</Text>}
          actions={<Button>Button</Button>}
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>

      <Accordion expandedSection="1">
        <AccordionSection id="1" header={<Text type="primary">Expanded</Text>}>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>

      <Accordion expandedSection="1">
        <AccordionSection
          id="1"
          header={<Text type="primary">Expanded</Text>}
          footer={<Text type="primary">Footer</Text>}
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    </div>
  );
}
