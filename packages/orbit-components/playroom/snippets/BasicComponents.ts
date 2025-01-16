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

const linkList = `
<LinkList>
  <TextLink type="secondary">
    Flight 1
  </TextLink>
  <TextLink type="secondary">
    Flight 2
  </TextLink>
  <TextLink type="secondary">
    Flight 3
  </TextLink>
</LinkList>
`;

const list = `
<List>
  <ListItem>
    24,000 locations around the globe
  </ListItem>
  <ListItem>
    Lowest price car rental in Warsaw
  </ListItem>
  <ListItem>
    From 3 star budget to 5 star luxury
  </ListItem>
</List>
`;

const listChoice = `
<>
  <ListChoice
    title="Choice Title"
    description="Further description"
    icon={<Icons.Accommodation />}
    selectable
  />
  <ListChoice
    title="Choice Title"
    description="Further description"
    icon={<Icons.Accommodation />}
    selectable
  />
</>
`;

const loading = `<Loading loading text="Please wait, content is loading..." type="pageLoader" />`;

const notificationBadge = `<NotificationBadge type="info">10</NotificationBadge>`;

const pagination = `
<Pagination
  labelProgress="Numbers of pages: 6"
  pageCount={6}
/>
`;

const popover = `
<Popover
  content={
  <Stack>
    <Text>Lorem ipsum</Text>
  </Stack>
}
>
  <Button
    iconRight={<Icons.ChevronDown />}
  >
    Open popover
  </Button>
</Popover>
`;

const radio = `<Radio label="Label" name="Name" value="value" />`;

const seat = `<Seat label="XY" type="default" />`;

const segmentedSwitch = `
<div className="pt-800">
  <SegmentedSwitch
    help="Some help text"
    label="Gender"
    maxWidth="50%"
    options={[
      {
        label: 'Male',
        value: 'Male'
      },
      {
        label: 'Female',
        value: 'Female'
      }
    ]}
    spaceAfter="normal"
  />
</div>
`;

const separator = `<Separator label="Some label text" />`;

const skeleton = `<Skeleton preset="List" />`;

const socialButton = `<SocialButton type="apple" />`;

const stepper = `<Stepper />`;

const stopoverArrow = `<StopoverArrow stops="2" />`;

const switchComponent = `<Switch checked icon={<Icons.Lock />} />`;

const tag = `
<Tag
  iconLeft={<Icons.PlusMinus />}
  type="colored"
  onRemove={() => {}}
>
  Passengers
</Tag>
`;

const text = `<Text>Text</Text>`;

const textLink = `
<TextLink
  href={undefined}
  iconRight={<Icons.ChevronForward />}
  onClick={() => {}}
>
  Link text
</TextLink>
`;

const timeline = `
<Timeline>
  <TimelineStep type="success" label="Waiting for your passport details" />
  <TimelineStep type="warning" label="Waiting for check-in" />
  <TimelineStep type="info" label="Processing check-in" />
  <TimelineStep type="critical" label="Boarding pass ready" />
</Timeline>
`;

const tooltip = `
<Stack justify="center">
  <Tooltip
    content="Tooltip content"
  >
    <Text>Tooltip trigger</Text>
  </Tooltip>
</Stack>
`;

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
  {
    group: "LinkList",
    code: linkList,
  },
  {
    group: "List",
    code: list,
  },
  {
    group: "ListChoice",
    code: listChoice,
  },
  {
    group: "Loading",
    code: loading,
  },
  {
    group: "NotificationBadge",
    code: notificationBadge,
  },
  {
    group: "Pagination",
    code: pagination,
  },
  {
    group: "Popover",
    code: popover,
  },
  {
    group: "Radio",
    code: radio,
  },
  {
    group: "Seat",
    code: seat,
  },
  {
    group: "SegmentedSwitch",
    code: segmentedSwitch,
  },
  {
    group: "Separator",
    code: separator,
  },
  {
    group: "Skeleton",
    code: skeleton,
  },
  {
    group: "SocialButton",
    code: socialButton,
  },
  {
    group: "Stepper",
    code: stepper,
  },
  {
    group: "StopoverArrow",
    code: stopoverArrow,
  },
  {
    group: "Switch",
    code: switchComponent,
  },
  {
    group: "Tag",
    code: tag,
  },
  {
    group: "Text",
    code: text,
  },
  {
    group: "TextLink",
    code: textLink,
  },
  {
    group: "Timeline",
    code: timeline,
  },
  {
    group: "Tooltip",
    code: tooltip,
  },
];
