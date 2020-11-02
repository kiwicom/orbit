// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";

import Text from "../Text";
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
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          header={
            <Stack spacing="small">
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={
            <Stack spacing="small">
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={
            <Stack spacing="small">
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with disabled sections", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          expandable={false}
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X2"
          expandable={false}
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X3"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with custom actions", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          actions={<Button>Open</Button>}
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          actions={<Button>Open</Button>}
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          actions={
            <Stack direction="row">
              <Button type="secondary">Edit</Button>
              <Button>Custom close</Button>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with sticky footer", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={
            <Stack spacing="small">
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          footer={tmpFooter}
        >
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary" spaceAfter="large">
            This is a content text
          </Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary" spaceAfter="large">
            This is a content text
          </Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={
            <Stack spacing="small">
              <Text type="primary">This is a content text</Text>
              <Text size="small">This is a content text</Text>
            </Stack>
          }
          footer={tmpFooter}
        >
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Loading Accordion", () => {
    return (
      <Accordion loading>
        <AccordionSection>This is a section content</AccordionSection>
      </Accordion>
    );
  });
