interface Snippet {
  group: string;
  name: string;
  code: string;
}

const snippets: Snippet[] = [
  {
    group: "Basic Components",
    name: "Button Primary",
    code: `<Button>Click me</Button>`,
  },
  {
    group: "Basic Components",
    name: "Alert Info",
    code: `<Alert type="info">This is an informational message</Alert>`,
  },
  {
    group: "Forms",
    name: "Input Field",
    code: `<InputField label="Username" placeholder="Enter your username" />`,
  },
  {
    group: "Layout",
    name: "Card with Content",
    code: `
<Card>
  <CardSection>
    <Stack>
      <Heading type="title3">Card Title</Heading>
      <Text>This is some content inside a card.</Text>
      <Button>Learn More</Button>
    </Stack>
  </CardSection>
</Card>`,
  },
];

export default snippets;
