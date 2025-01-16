const alert = `<Alert title="The title" type="info" icon>The message.</Alert>`;

const button = `<Button type="primary">Primary Button</Button>`;

const badge = `<Badge type="info">Content</Badge>`;

const buttonLink = `<ButtonLink type="primary">ButtonLink</ButtonLink>`;

const badgeList = `
<BadgeList>
  <BadgeListItem icon={<Icons.KiwicomGuarantee />}>
    You're departing from a different place
  </BadgeListItem>
  <BadgeListItem icon={<Icons.KiwicomGuarantee />} type="info" size="normal">
    You must collect and recheck your baggage
  </BadgeListItem>
</BadgeList>
`;

const breadcrumbs = `
<Breadcrumbs>
  <BreadcrumbsItem>Kiwi.com</BreadcrumbsItem>
  <BreadcrumbsItem>1. Level</BreadcrumbsItem>
  <BreadcrumbsItem>2. Level</BreadcrumbsItem>
  <BreadcrumbsItem>3. Level</BreadcrumbsItem>
</Breadcrumbs>
`;

const buttonGroup = `
<ButtonGroup>
  <Button>Button</Button>
  <Button iconLeft={<Icons.ChevronDown />}/>
</ButtonGroup>
`;

const checkbox = `<Checkbox label="Checkbox label" info="Additional information" />`;

const choiceGroup = `
<ChoiceGroup label="Choice group">
  <Radio label="Option one" value="one" />
  <Radio label="Option two" value="two" />
  <Radio label="Option three" value="three" />
</ChoiceGroup>`;

const collapse = `<Collapse label="Title"><Text>Collapsed content</Text></Collapse>`;

const coupon = `<Coupon>CODE</Coupon>`;

const dialog = `
<Dialog 
  title="Log out"
  description="Are you sure you want to log out now?" 
  primaryAction={<Button type="critical">Log out</Button>}/>`;

const heading = `<Heading as="h1" type="title1">Heading</Heading>`;

export default [
  {
    group: "Alert",
    code: alert,
  },
  {
    group: "Button",
    code: button,
  },
  {
    group: "ButtonLink",
    code: buttonLink,
  },
  {
    group: "ButtonGroup",
    code: buttonGroup,
  },
  {
    group: "Badge",
    code: badge,
  },
  {
    group: "BadgeList",
    code: badgeList,
  },
  {
    group: "Breadcrumbs",
    code: breadcrumbs,
  },
  {
    group: "Checkbox",
    code: checkbox,
  },
  {
    group: "ChoiceGroup",
    code: choiceGroup,
  },
  {
    group: "Collapse",
    code: collapse,
  },
  {
    group: "Coupon",
    code: coupon,
  },
  {
    group: "Dialog",
    code: dialog,
  },
  {
    group: "Heading",
    code: heading,
  },
];
