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

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: function Render() {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
        <AccordionSection
          id="0X0"
          header={
            <Stack spacing="300">
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
            <Stack spacing="300">
              <Text type="primary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          <Text type="primary">This is an expanded content</Text>
        </AccordionSection>
      </Accordion>
    );
  },
};

export const AccordionWithDisabledSections: Story = {
  render: function Render() {
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
          <Text type="primary">This is an expanded content</Text>
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
          <Text type="primary">This is an expanded content</Text>
        </AccordionSection>
      </Accordion>
    );
  },
};

export const AccordionWithCustomActions: Story = {
  render: function Render() {
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
          actions={<Button onClick={() => setExpandedSection("0X0")}>Open</Button>}
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
          actions={
            <Stack direction="row">
              <Button onClick={action("Edit onClick")} type="secondary">
                Edit
              </Button>
              <Button onClick={() => setExpandedSection("0X1")}>Open</Button>
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
  render: function Render() {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
        <AccordionSection
          id="0X1"
          header={
            <Stack spacing="300">
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
            <Stack spacing="300">
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

export const MobileFirstInteraction: Story = {
  render: function Render() {
    const [expandedSection, setExpandedSection] = React.useState("");

    return (
      <Stack>
        <Accordion
          expandedSection={expandedSection}
          onExpand={id => setExpandedSection(String(id))}
        >
          <AccordionSection
            id="mobile"
            expandOnTileClick
            header={
              <Stack spacing="300">
                <Text type="primary">Click anywhere on the header to expand</Text>
                <Text size="small">Uses mobile-first tile click interaction</Text>
              </Stack>
            }
          >
            <Text type="primary">
              This section uses the mobile-first expandOnTileClick interaction.
            </Text>
            <Text type="primary">
              The entire header area is clickable for better mobile usability.
            </Text>
            <Text type="primary">
              Keyboard users can still use Enter or Space to expand/collapse.
            </Text>
          </AccordionSection>
        </Accordion>
      </Stack>
    );
  },
};
