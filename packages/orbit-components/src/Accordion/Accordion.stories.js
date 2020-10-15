// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import Stack from "../Stack";
import AccordionSection from "./AccordionSection";

import Accordion from "./index";

const tmpFooter = (
  <Stack direction="row" justify="between">
    <Button type="secondary">Back to previous segment</Button>
    <Button type="primarySubtle">Continue to next segment</Button>
  </Stack>
);

storiesOf("Accordion", module)
  .add("Default", () => {
    return (
      <Accordion>
        <AccordionSection header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
        <AccordionSection header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
        <AccordionSection header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with disabled sections", () => {
    return (
      <Accordion>
        <AccordionSection header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
        <AccordionSection expandable={false} header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
        <AccordionSection expandable={false} header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
        <AccordionSection header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
        <AccordionSection expandable={false} header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with controlled state", () => {
    const expandedSection = select("expandedSection", ["0X0", "0X1", "0X2"], "0X1");
    return (
      <Accordion expandedSection={expandedSection}>
        <AccordionSection
          id="0X0"
          header={<div>This is a header label</div>}
          actions={<Button>Open</Button>}
        >
          This is a content
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={<div>This is a header label</div>}
          actions={<Button>Open</Button>}
        >
          This is a content
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={<div>This is a header label</div>}
          actions={
            <Stack direction="row">
              <Button type="secondary">Edit</Button>
              <Button>Custom close</Button>
            </Stack>
          }
        >
          Ja sam content 3
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with sticky footer", () => {
    return (
      <Accordion initiallyExpandedSection="0X1">
        <AccordionSection
          id="0X0"
          onExpand={action("onExpand")}
          header={
            <Stack justify="between">
              <p>This is a header label</p>
              <p>This is a header label</p>
            </Stack>
          }
        >
          This is a content
        </AccordionSection>
        <AccordionSection
          id="0X1"
          onExpand={action("onExpand")}
          header={
            <Stack justify="between">
              <p>This is a header label</p>
              <p>This is a header label</p>
            </Stack>
          }
          footer={tmpFooter}
        >
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
        </AccordionSection>
        <AccordionSection
          id="0X2"
          onExpand={action("onExpand")}
          header={
            <Stack justify="between">
              <p>This is a header label</p>
            </Stack>
          }
          footer={tmpFooter}
        >
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Loading Accordion", () => {
    return (
      <Accordion loading>
        <AccordionSection header={<div>Default Accordion with header</div>}>
          This is a section content
        </AccordionSection>
      </Accordion>
    );
  });
