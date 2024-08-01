import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Text from "../Text";
import Button from "../Button";
import Stack from "../Stack";
import AccordionSection from "./AccordionSection";
import useMediaQuery from "../hooks/useMediaQuery";

import Accordion from ".";

const Footer = () => {
  const { isTablet, isMediumMobile } = useMediaQuery();

  return (
    <Stack flex shrink justify="between" direction={isMediumMobile ? "row" : "column"}>
      <Button fullWidth={!isTablet} type="secondary">
        Back to previous segment
      </Button>
      <Button fullWidth={!isTablet} type="primarySubtle">
        Continue to next segment
      </Button>
    </Stack>
  );
};
const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
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
  },
};

export const AccordionWithDisabledSections: Story = {
  render: () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
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
  },
};

export const AccordionWithCustomActions: Story = {
  render: () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
        <AccordionSection
          id="0X0"
          header={
            <Stack>
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          actions={<Button onClick={action("Open onClick")}>Open</Button>}
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
              <Button onClick={action("Edit onClick")} type="secondary">
                Edit
              </Button>
              <Button onClick={action("Close onClick")}>Custom close</Button>
            </Stack>
          }
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    );
  },
};

export const AccordionWithStickyFooter: Story = {
  render: () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
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
          footer={<Footer />}
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
          footer={<Footer />}
        >
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    );
  },
};

export const LoadingAccordion: Story = {
  render: () => (
    <Accordion loading>
      <AccordionSection>This is a section content</AccordionSection>
    </Accordion>
  ),
};
