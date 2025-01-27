const calloutBanner = `
<CallOutBanner
  actions={<Button iconRight={<Icons.NewWindow />} size="small" type="secondary">Find a Room</Button>}
  description="Select your accommodation from more than a million properties worldwide."
  illustration={<Illustration name="Accommodation" size="small"/>}
  title="Rooms in Warsaw"
>
  <List type="secondary">
    <ListItem icon={<Icons.Check color="success" />}>
      Up to 50% off.
    </ListItem>
    <ListItem icon={<Icons.Check color="success" />}>
      From 3-star budget to 5-star luxury.
    </ListItem>
  </List>
</CallOutBanner>
`;

const drawer = `
<Drawer title="Drawer title" position="right" width="320px">
  <Collapse label="Links list" initialExpanded>
    <LinkList indent>
      <TextLink type="secondary">
        Link 1
      </TextLink>
      <TextLink type="secondary">
        Link 2
      </TextLink>
      <TextLink type="secondary">
        Link 3
      </TextLink>
    </LinkList>
  </Collapse>
  <LinkList>
    <TextLink type="secondary">
      Sign out
    </TextLink>
  </LinkList>
</Drawer>
`;

const horizontalScroll = `
<HorizontalScroll arrows arrowLeftAriaLabel="scroll left" arrowRightAriaLabel="scroll right">
  {Array(...Array(10)).map((_, key) => (
    <Box
      key={key}
      display="flex"
      justify="center"
      minWidth="150px"
      background="cloudLight"
      height="full"
    >
      <Text size="large" weight="bold" as="div">
        <div
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {key}
        </div>
      </Text>
    </Box>
  ))}
</HorizontalScroll>
`;

const itinerary = `
<Itinerary>
  <ItineraryStatus label="This part is new" type="success">
    <ItinerarySegment
      banner={
        <Stack>
          <ItinerarySegmentBanner>
            <ItineraryBadgeList>
              <ItineraryBadgeListItem
                icon={<Icons.StarFull />}
                type="warning"
              >
                Hidden city hack: This itinerary finishes in New York
                (United States), but you’ll get off during the
                layover.
              </ItineraryBadgeListItem>
              <ItineraryBadgeListItem icon={<Icons.Visa />}>
                Check travel document requirements for all
                destinations, including passport, visa and COVID-19
                documents.
              </ItineraryBadgeListItem>
              <ItineraryBadgeListItem
                icon={<Icons.BaggageCheckedNone />}
              >
                You can’t bring checked baggage.
              </ItineraryBadgeListItem>
            </ItineraryBadgeList>
          </ItinerarySegmentBanner>
        </Stack>
      }
    >
      <ItinerarySegmentStop
        city="Prague"
        date="Wed, 15.6"
        station="Václav Haivel Airport Prague (PRG)"
        time="16:20"
      />
      <ItinerarySegmentDetail
        content={[
          {
            items: [
              {
                icon: <Icons.Airplane size="small" />,
                name: "Carrier",
                value: "HiFly",
              },
              {
                icon: <Icons.InformationCircle size="small" />,
                name: "Connection number",
                value: "TP 8345",
              },
            ],
            title: "Connection Info",
          },
          {
            items: [
              {
                icon: <Icons.Seat size="small" />,
                name: "Seat pitch",
                value: "76cm",
              },
              {
                icon: <Icons.Seat size="small" />,
                name: "Seat width",
                value: "43cm",
              },
              {
                icon: <Icons.Seat size="small" />,
                name: "Seat recline",
                value: "7cm",
              },
              {
                icon: <Icons.Entertainment size="small" />,
                name: "Audio & video on demand",
                value: "No",
              },
              {
                icon: <Icons.PowerPlug size="small" />,
                name: "In-seat power",
                value: "No",
              },
              {
                icon: <Icons.Wifi size="small" />,
                name: "Wi-Fi on board",
                value: "No",
              },
            ],
            title: "Seating Info",
          },
        ]}
        duration="2h 10m"
        summary={
          <Badge carriers={[{ code: "5K", name: "HiFly" }]}>
            HiFly
          </Badge>
        }
      />
      <ItinerarySegmentStop
        city="Frankfurt"
        date="Wed, 15.6"
        hidden
        station="Frankfurt International Airport (FRA)"
        time="18:30"
      />
      <ItinerarySegmentStop
        city="New York"
        station="John F. Kennedy International Airport (JFK)"
      />
    </ItinerarySegment>
  </ItineraryStatus>
</Itinerary>
`;

const modal = `
<Modal fixedFooter>
  <ModalHeader
    description="Select a flight below to see the menu (where available)"
    illustration={<Illustration name="BaggageDrop" size="small" />}
    title="Enjoy something to eat while you fly"
  />
  <ModalSection suppressed>
    <Stack>
      <Text uppercase weight="bold">
        Outbound
      </Text>
      <Card>
        <CardSection
          actions={
            <Button size="small" type="secondary">
              Edit
            </Button>
          }
          expandable
          noSeparator
          title={
            <Stack
              align="center"
              direction="row"
              justify="between"
              spacing="200"
            >
              <Stack spacing="100">
                <Text size="small" type="secondary">
                  Sat, Mar 31 Trip length: 1h55m
                </Text>
                <Stack align="center" direction="row" spacing="100">
                  <Text weight="bold">London LHR</Text>
                  <Icons.FlightDirect size="small" />
                  <Text weight="bold">Prague PRG</Text>
                </Stack>
              </Stack>
            </Stack>
          }
        />
        <CardSection
          actions={
            <Button size="small" type="secondary">
              Edit
            </Button>
          }
          expandable
          title={
            <Stack
              align="center"
              direction="row"
              justify="between"
              spacing="200"
            >
              <Stack spacing="100">
                <Text size="small" type="secondary">
                  Sat, Mar 31 Trip length: 1h55m
                </Text>
                <Stack align="center" direction="row" spacing="100">
                  <Text weight="bold">London LHR</Text>
                  <Icons.FlightDirect size="small" />
                  <Text weight="bold">Prague PRG</Text>
                </Stack>
              </Stack>
            </Stack>
          }
        />
      </Card>
    </Stack>
  </ModalSection>
  <ModalSection>
    <Stack>
      <Text uppercase weight="bold">
        INBOUND
      </Text>
      <Card>
        <CardSection
          actions={
            <Button size="small" type="secondary">
              Edit
            </Button>
          }
          expandable
          title={
            <Stack
              align="center"
              direction="row"
              justify="between"
              spacing="200"
            >
              <Stack spacing="100">
                <Text size="small" type="secondary">
                  Sat, Mar 31 Trip length: 1h55m
                </Text>
                <Stack align="center" direction="row" spacing="100">
                  <Text weight="bold">London LHR</Text>
                  <Icons.FlightDirect size="small" />
                  <Text weight="bold">Prague PRG</Text>
                </Stack>
              </Stack>
            </Stack>
          }
        />
        <CardSection
          actions={
            <Button size="small" type="secondary">
              Edit
            </Button>
          }
          expandable
          title={
            <Stack
              align="center"
              direction="row"
              justify="between"
              spacing="200"
            >
              <Stack spacing="100">
                <Text size="small" type="secondary">
                  Sat, Mar 31 Trip length: 1h55m
                </Text>
                <Stack align="center" direction="row" spacing="100">
                  <Text weight="bold">London LHR</Text>
                  <Icons.FlightDirect size="small" />
                  <Text weight="bold">Prague PRG</Text>
                </Stack>
              </Stack>
            </Stack>
          }
        />
      </Card>
    </Stack>
  </ModalSection>
  <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
    <Button iconLeft={<Icons.ChevronBackward />} type="secondary">
      Back
    </Button>
    <Button fullWidth>Proceed to Payment (23.98€)</Button>
  </ModalFooter>
</Modal>
`;

const navigationBar = `<NavigationBar>
  <Stack
    justify="between"
    spacing="none"
  >
    <ButtonLink
      iconRight={<Icons.ChevronDown />}
      type="secondary"
    >
      Flights
    </ButtonLink>
    <Stack
      direction="row"
      justify="end"
      shrink
      spacing="100"
    >
      <ButtonLink
        iconLeft={<Icons.StarFull />}
        type="secondary"
      />
      <ButtonLink
        iconLeft={<Icons.AccountCircle />}
        type="secondary"
      />
    </Stack>
  </Stack>
</NavigationBar>
`;

const table = `
<Table>
  <TableHead>
    <TableRow>
      <TableCell>
        lorem ipsum
      </TableCell>
      <TableCell>
        lorem ipsum
      </TableCell>
      <TableCell>
        lorem ipsum
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        lorem ipsum
      </TableCell>
      <TableCell>
        lorem ipsum
      </TableCell>
      <TableCell>
        lorem ipsum
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        lorem ipsum
      </TableCell>
      <TableCell>
        lorem ipsum
      </TableCell>
      <TableCell>
        lorem ipsum
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
`;

const tabs = `
<Tabs>
  <TabList>
    <Tab>
      Tab 1
    </Tab>
    <Tab type="basic">
      Tab 2
    </Tab>
    <Tab type="medium">
      Tab 3
    </Tab>
    <Tab type="top">
      Tab 4
    </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      Tab 1 content
    </TabPanel>
    <TabPanel>
      Tab 2 content
    </TabPanel>
    <TabPanel>
      Tab 3 content
    </TabPanel>
    <TabPanel>
      Tab 4 content
    </TabPanel>
  </TabPanels>
</Tabs>
`;

const wizard = `
<Wizard
  activeStep={2}
  completedSteps={2}
>
  <WizardStep title="Search" />
  <WizardStep title="Passenger details" />
  <WizardStep title="Ticket fare" />
  <WizardStep title="Customize your trip" />
  <WizardStep title="Kiwi.com guarantee" />
  <WizardStep title="Seating" />
  <WizardStep title="Overview & payment" />
</Wizard>
`;

export default [
  {
    group: "CalloutBanner",
    code: calloutBanner,
  },
  {
    group: "Drawer",
    code: drawer,
  },
  {
    group: "HorizontalScroll",
    code: horizontalScroll,
  },
  {
    group: "Itinerary",
    code: itinerary,
  },
  {
    group: "Modal",
    code: modal,
  },
  {
    group: "NavigationBar",
    code: navigationBar,
  },
  {
    group: "Table",
    code: table,
  },
  {
    group: "Tabs",
    code: tabs,
  },
  {
    group: "Wizard",
    code: wizard,
  },
];
