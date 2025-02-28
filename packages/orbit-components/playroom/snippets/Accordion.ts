const utils = `const [expandedSection, setExpandedSection] = React.useState("accordion-section-0");`;

const code = `
<>
  {/* For the example to work as expected, you should also import the Accordion Utils before the return. */}

  <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
    <AccordionSection
      id="accordion-section-0"
      actions={<Button onClick={() => setExpandedSection("accordion-section-0")}>Open</Button>}
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
      id="accordion-section-1"
      actions={<Button onClick={() => setExpandedSection("accordion-section-1")}>Open</Button>}
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
      id="accordion-section-2"
      actions={<Button onClick={() => setExpandedSection("accordion-section-2")}>Open</Button>}
      header={
        <Stack spacing="300">
          <Text type="primary">This is a header label</Text>
          <Text size="small">This is a header label</Text>
        </Stack>
      }
    >
      <Text type="primary">This is a content text</Text>
    </AccordionSection>
  </Accordion>
</>
`;

export default [
  {
    group: "Accordion",
    name: "Basic Accordion",
    code,
  },
  {
    group: "Accordion",
    name: "Utils",
    code: utils,
  },
];
