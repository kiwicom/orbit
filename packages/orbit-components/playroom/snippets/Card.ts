const basic = `<Card description="This is description of the card" title="Card title"/>`;

const expandable = `
<Card description="This card has expandable sections" title="Card Expandable">
  <CardSection
    title="Exapandable Section"
    description="Section Description"
    expandable
  >
    Section content
  </CardSection>
  <CardSection
    title="Non exapandable Section"
    description="Section Description"
  >
    Section content
  </CardSection>
</Card>
`;

export default [
  {
    group: "Card",
    name: "Basic Card",
    code: basic,
  },
  {
    group: "Card",
    name: "Expandable Card",
    code: expandable,
  },
];
