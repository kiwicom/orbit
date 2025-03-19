import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import defaultTheme from "../defaultTheme";
import Modal, { ModalSection } from "../Modal";
import {
  KiwiComGuarantee,
  Airplane,
  BaggageCheckedNone,
  Clock,
  SelfTransfer,
  PowerPlug,
  StarFull,
  BaggageSet,
  Accommodation,
  Location,
  Wifi,
  Visa,
  Seat,
  Entertainment,
  InformationCircle as Info,
} from "../icons";
import Stack from "../Stack";
import Badge from "../Badge";
import Text from "../Text";
import CountryFlag from "../CountryFlag";
import Heading from "../Heading";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Separator from "../Separator";
import { SPACINGS_AFTER } from "../common/consts";
import { TYPE_OPTIONS } from "../BadgeList/consts";
import { Icons } from "..";
import { SPACINGS } from "../utils/layout/consts";

import Itinerary, {
  ItinerarySeparator,
  ItinerarySegmentBanner,
  ItinerarySegment,
  ItineraryBadgeList,
  ItineraryBadgeListItem,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItineraryStatus,
} from ".";

export enum STATUS_TYPES {
  CRITICAL = "critical",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  NEUTRAL = "neutral",
}

const meta: Meta<typeof Itinerary> = {
  title: "Itinerary",
  component: Itinerary,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export default meta;

type Story = StoryObj<typeof Itinerary>;

const getIcon = source => Icons[source];

const BadgeGroup = () => {
  const carriers = [{ code: "REGIOJETT", name: "Regiojet" }];

  return (
    <Stack flex align="center" spacing="200">
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Array(...Array(8)).map((_, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Badge key={key} carriers={carriers}>
            {carriers[0].name}
          </Badge>
        ))
      }
      <Badge>1 stop</Badge>
    </Stack>
  );
};

const content = [
  {
    title: "Connection Info",
    items: [
      {
        icon: <Airplane size="small" />,
        name: "Carrier",
        value: "Ryanair",
      },
      {
        icon: <Info size="small" />,
        name: "Connection number",
        value: "RA 8345",
      },
    ],
  },
  {
    title: "Seating Info",
    items: [
      {
        icon: <Seat size="small" />,
        name: "Seat pitch",
        value: "76cm",
      },
      {
        icon: <Seat size="small" />,
        name: "Seat width",
        value: "43cm",
      },
      {
        icon: <Seat size="small" />,
        name: "Seat recline",
        value: "7cm",
      },
      {
        icon: <Entertainment size="small" />,
        name: "Audio & video on demand",
        value: "No",
      },
      {
        icon: <PowerPlug size="small" />,
        name: "In-seat power",
        value: "No",
      },
      {
        icon: <Wifi size="small" />,
        name: "Wi-Fi on board",
        value: "No",
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <Itinerary>
      <ItinerarySegment spaceAfter="medium">
        <ItinerarySegmentStop
          city="Moscow"
          station="Sheremetyevo International Airport (SVO)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail
          icon={<Airplane size="small" />}
          duration="2h 30m"
          summary={<BadgeGroup />}
          content={content}
        />
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItinerarySegment>
      <ItineraryBadgeList spaceAfter="medium">
        <ItineraryBadgeListItem icon={<KiwiComGuarantee />}>
          Connection protected by the Kiwi.com Guarantee
        </ItineraryBadgeListItem>
      </ItineraryBadgeList>
      <ItinerarySegment spaceAfter="large">
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Sat, 20.10"
          time="11:05"
        />
        <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
        <ItinerarySegmentStop
          city="Milan"
          station="Milan Bergamo International Airport (BGY)"
          date="Fri, 20.10"
          time="16:35"
          type="warning"
        />
      </ItinerarySegment>
    </Itinerary>
  ),

  parameters: {
    info: "Example of the whole Itinerary component based on multiple itinerary-related components. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const BadgeList: StoryObj<typeof ItineraryBadgeList> = {
  render: args => (
    <Stack flex direction="column">
      <ItineraryBadgeList {...args}>
        <ItineraryBadgeListItem type="warning" icon={<SelfTransfer />}>
          You’re departing from a different place
        </ItineraryBadgeListItem>
        <ItineraryBadgeListItem type="warning" icon={<SelfTransfer />}>
          Self transfer at Vienna is your responsibility
        </ItineraryBadgeListItem>
        <ItineraryBadgeListItem type="warning" icon={<Clock />}>
          1h 20m layover
        </ItineraryBadgeListItem>
        <ItineraryBadgeListItem icon={<BaggageSet />}>
          You must collect and recheck your baggage
        </ItineraryBadgeListItem>
        <ItineraryBadgeListItem icon={<KiwiComGuarantee />}>
          Connection protected by the Kiwi.com Guarantee
        </ItineraryBadgeListItem>
        <ItineraryBadgeListItem icon={<Info />} type="info">
          Rooms from 35 € by Booking.com
        </ItineraryBadgeListItem>
      </ItineraryBadgeList>
      <ItineraryBadgeList {...args}>
        <ItineraryBadgeListItem
          type="info"
          icon={<Clock />}
          withBackground
          cancelledValue="1h 40m layover"
        >
          1h 20m layover
        </ItineraryBadgeListItem>
      </ItineraryBadgeList>
    </Stack>
  ),

  args: {
    spaceAfter: SPACINGS_AFTER.MEDIUM,
    spacing: SPACINGS.NONE,
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
    spacing: {
      options: Object.values(SPACINGS),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    info: "Try all possible options of ItineraryBadgeList! Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["children"],
    },
  },
};

export const BadgeListItem: StoryObj<typeof ItineraryBadgeListItem> = {
  render: ({ children, icon, ...args }) => {
    const Icon = getIcon(icon);

    return (
      <Stack flex direction="column">
        <ItineraryBadgeList>
          <ItineraryBadgeListItem {...args} icon={<Icon />}>
            {children}
          </ItineraryBadgeListItem>
        </ItineraryBadgeList>
      </Stack>
    );
  },

  args: {
    cancelledValue: "London STN",
    withBackground: true,
    icon: "SelfTransfer",
    strikeThrough: false,
    type: TYPE_OPTIONS.NEUTRAL,
    children: "You’re departing from a different place",
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    info: "Try all possible options of ItineraryBadgeListItem! Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["spaceAfter", "size"],
    },
  },
};

export const Segment: StoryObj<typeof ItinerarySegment> = {
  render: args => {
    return (
      <div className="space-y-800">
        <Itinerary>
          <ItinerarySegment
            {...args}
            banner={
              <Stack inline align="stretch">
                <ItinerarySegmentBanner>
                  <ItineraryBadgeList>
                    <ItineraryBadgeListItem icon={<BaggageCheckedNone />}>
                      You can’t bring checked or cabin baggage.
                    </ItineraryBadgeListItem>
                    <ItineraryBadgeListItem icon={<KiwiComGuarantee />}>
                      Connection protected by the Kiwi.com Guarantee
                    </ItineraryBadgeListItem>
                  </ItineraryBadgeList>
                </ItinerarySegmentBanner>
              </Stack>
            }
          >
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              date="Fri, 19.10"
              time="16:35"
            />
          </ItinerarySegment>
        </Itinerary>
      </div>
    );
  },

  parameters: {
    controls: {
      exclude: ["onClick", "onCollapse", "onExpand", "banner"],
    },
  },

  args: {
    ...BadgeList.args,
    noElevation: false,
    actionable: true,
    onClick: action("clicked"),
    onCollapse: action("collapsed"),
    onExpand: action("expanded"),
  },

  argTypes: {
    ...BadgeList.argTypes,
  },
};

export const SegmentStop: StoryObj<typeof ItinerarySegmentStop> = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Stack spacing="600">
        <Heading type="title2">Regular stop</Heading>
        <Itinerary>
          <ItinerarySegmentStop {...args} icon={<Icon />} />
        </Itinerary>
        <Heading type="title2">Examples</Heading>
        <Heading type="title2">Cancelled date and time, changed city and station</Heading>
        <Itinerary>
          <ItinerarySegment>
            <ItinerarySegmentStop
              {...args}
              icon={<Icon />}
              cancelledDate="Mon, 30.1"
              cancelledCity="Bratislava"
              cancelledStation="M. R. Štefánik Airport"
              cancelledTime="13:30"
            />
          </ItinerarySegment>
        </Itinerary>
        <Heading type="title2">Hidden city example</Heading>
        <Itinerary>
          <ItinerarySegment
            banner={
              <Stack inline align="stretch">
                <ItinerarySegmentBanner>
                  <ItineraryBadgeList>
                    <ItineraryBadgeListItem type="warning" icon={<StarFull color="warning" />}>
                      <Text as="span" type="warning" weight="bold" size="small">
                        Hidden city hack:{" "}
                      </Text>{" "}
                      This itinerary finishes in New York (United States), but you’ll get off during
                      the layover
                    </ItineraryBadgeListItem>
                    <ItineraryBadgeListItem icon={<Visa />}>
                      Check travel document requirements for all destinations, including passport,
                      visa and COVID-19 documents.
                    </ItineraryBadgeListItem>
                    <ItineraryBadgeListItem icon={<BaggageCheckedNone />}>
                      You can’t bring checked or cabin baggage.
                    </ItineraryBadgeListItem>
                  </ItineraryBadgeList>
                </ItinerarySegmentBanner>
              </Stack>
            }
          >
            <ItinerarySegmentStop
              city="Brno BRQ"
              station="Brno-Tuřany"
              date="Mon, 30.1"
              time="17:30"
            />
            <ItinerarySegmentDetail
              duration="1h 35m"
              summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
              content={content}
            />
            <ItinerarySegmentStop
              city="Barcelona BCN"
              station="El Prat de Llobregat"
              hidden
              date="Mon, 30.1"
              time="20:00"
            />
            <ItinerarySegmentStop
              city={<Text type="secondary">New York JFK</Text>}
              station={
                <Stack flex align="center" spacing="200">
                  <CountryFlag code="US" size="small" name="USA" />
                  <Text type="secondary" size="small">
                    United states
                  </Text>
                </Stack>
              }
            />
          </ItinerarySegment>
        </Itinerary>
        <Heading type="title2">Throwaway ticketing</Heading>
        <Itinerary>
          <ItinerarySegment
            banner={
              <Stack inline align="stretch">
                <ItinerarySegmentBanner>
                  <ItineraryBadgeList>
                    <ItineraryBadgeListItem type="info" icon={<StarFull color="info" />}>
                      <Text as="span" type="info" weight="bold">
                        Throwaway ticketing hack:{" "}
                      </Text>{" "}
                      You are saving money with this travel hack.
                    </ItineraryBadgeListItem>
                  </ItineraryBadgeList>
                </ItinerarySegmentBanner>
              </Stack>
            }
          >
            <ItinerarySegmentStop
              city="Barcelona BCN"
              station="Barcelona-Sants"
              date="Mon, 30.1"
              time="17:30"
            />
            <ItinerarySegmentDetail
              duration="2h 30m"
              summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
              content={content}
            />
            <ItinerarySegmentStop
              city="London LHR"
              station="London Heathrow"
              date="Mon, 30.1"
              time="20:00"
            />
          </ItinerarySegment>
        </Itinerary>
      </Stack>
    );
  },

  args: {
    date: "Fr, 19.10",
    time: "14:05",
    station: "Václav Havel Airport Prague (PRG)",
    city: "Prague",
    type: undefined,
    hidden: false,
    cancelledDate: "",
    cancelledCity: "",
    cancelledStation: "",
    cancelledTime: "",
    icon: "Airplane",
    hiddenCityText: "Hidden city",
    minWidth: 70,
  },

  argTypes: {
    type: {
      name: "type",
      options: [...Object.values(STATUS_TYPES), undefined],
      control: {
        type: "select",
      },
    },
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
};

export const SegmentDetail: StoryObj<typeof ItinerarySegmentDetail> = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Itinerary>
        <ItinerarySegment
          noElevation
          onClick={action("clicked")}
          onCollapse={action("collapsed")}
          onExpand={action("expanded")}
        >
          <ItinerarySegmentDetail
            {...args}
            icon={<Icon />}
            summary={<BadgeGroup />}
            content={content}
          />
        </ItinerarySegment>
      </Itinerary>
    );
  },

  args: {
    icon: "Airplane",
    duration: "2h 30m",
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
};

export const SegmentBanner: StoryObj<typeof ItinerarySegmentBanner> = {
  render: args => {
    return (
      <Itinerary>
        <ItinerarySegmentBanner {...args}>
          <ItineraryBadgeList>
            <ItineraryBadgeListItem icon={<BaggageCheckedNone />}>
              You can’t bring checked or cabin baggage.
            </ItineraryBadgeListItem>
          </ItineraryBadgeList>
        </ItinerarySegmentBanner>
      </Itinerary>
    );
  },

  parameters: {
    info: "Itinerary Segment Banner component. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },

  args: {
    onClick: action("onClick"),
  },
};

export const Status: StoryObj<typeof ItineraryStatus> = {
  render: args => (
    <Itinerary>
      <ItineraryStatus {...args}>
        <ItinerarySegment noElevation actionable={false}>
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Fri, 19.10"
            type="critical"
            time="14:05"
          />
          <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} />
          <ItinerarySegmentStop
            city="Vienna"
            type="critical"
            station="Vienna International Airport"
            date="Fri, 19.10"
            time="15:35"
            cancelledTime="14:00"
          />
        </ItinerarySegment>
      </ItineraryStatus>
    </Itinerary>
  ),

  parameters: {
    info: "This component shows the status of the itinerary (status type). Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    ...BadgeList.args,
    type: "critical",
    label: "Rescheduled · 4h later",
    actionable: false,
    offset: 10,
  },

  argTypes: {
    ...BadgeList.argTypes,
    type: {
      options: Object.values(STATUS_TYPES),
      control: {
        type: "select",
      },
    },
  },
};

export const ItinerarySeparatorComponent: StoryObj<typeof ItinerarySeparator> = {
  render: args => (
    <Stack direction="column">
      <ItinerarySeparator {...args}>
        <Text weight="bold">8 nights in Prague</Text>
      </ItinerarySeparator>
      <Heading>Examples</Heading>
      <ItinerarySeparator>
        <Text weight="bold">8 nights in Barcelona</Text>
      </ItinerarySeparator>
      <ItinerarySeparator />
      <ItinerarySeparator type="solid" color="paletteBlueNormal">
        <Text weight="bold">Eternity in Valhalla</Text>
      </ItinerarySeparator>
      <ItinerarySeparator type="dashed" color="paletteRedNormal">
        <Text weight="bold">Eternity in Hell</Text>
      </ItinerarySeparator>
      <ItinerarySeparator type="dotted" color="paletteGreenNormal">
        <Text weight="bold">Eternity in Paradise</Text>
      </ItinerarySeparator>
      <ItinerarySeparator type="double" color="paletteOrangeNormal">
        <Text weight="bold">Eternity in Tartarus</Text>
      </ItinerarySeparator>
      <ItinerarySeparator />
    </Stack>
  ),

  parameters: {
    info: "This components shows the ItinerarySeparator component. For color prop, use a value defined Orbit theme colors. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["spaceAfter"],
    },
  },

  args: {
    color: defaultTheme.orbit.paletteRedDarkHover,
    type: "solid",
  },

  argTypes: {
    color: {
      options: Object.keys(defaultTheme.orbit).filter(t => t.startsWith("palette")),
      control: {
        type: "select",
      },
    },
    type: {
      options: ["solid", "dashed", "dotted", "double", "none"],
      control: {
        type: "select",
      },
    },
  },
};

export const InsideModal: Story = {
  render: function Render() {
    const [isOpenedModal, setIsOpenedModal] = React.useState(false);
    const ref = React.useRef(null);

    return (
      <div>
        <Itinerary>
          <ItineraryStatus type="success" label="This part is new">
            <ItinerarySegment
              banner={
                <Stack>
                  <ItinerarySegmentBanner
                    onClick={ev => {
                      ev.preventDefault();
                      setIsOpenedModal(true);
                    }}
                    ref={ref}
                  >
                    <ItineraryBadgeList>
                      <ItineraryBadgeListItem icon={<StarFull />} type="warning">
                        Hidden city hack: This itinerary finishes in New York (United States), but
                        you’ll get off during the layover.
                      </ItineraryBadgeListItem>
                      <ItineraryBadgeListItem icon={<Visa />}>
                        Check travel document requirements for all destinations, including passport,
                        visa and COVID-19 documents.
                      </ItineraryBadgeListItem>
                      <ItineraryBadgeListItem icon={<BaggageCheckedNone />}>
                        You can’t bring checked or cabin baggage.
                      </ItineraryBadgeListItem>
                    </ItineraryBadgeList>
                  </ItinerarySegmentBanner>
                  <Separator />
                  <ItinerarySegmentBanner>
                    <ItineraryBadgeList>
                      <ItineraryBadgeListItem icon={<Location />} type="warning">
                        You’ll depart from a different place in Prague: Václav Havel Airport Prague
                      </ItineraryBadgeListItem>
                    </ItineraryBadgeList>
                  </ItinerarySegmentBanner>
                </Stack>
              }
            >
              <ItinerarySegmentStop
                city="Prague"
                station="Václav Haivel Airport Prague (PRG)"
                time="16:20"
                date="Wed, 15.6"
              />
              <ItinerarySegmentDetail
                duration="2h 10m"
                summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
                content={content}
              />
              <ItinerarySegmentStop
                hidden
                city="Frankfurt"
                time="18:30"
                date="Wed, 15.6"
                station="Frankfurt International Airport "
              />
              <ItinerarySegmentStop city="New York JFK" station="United States" />
            </ItinerarySegment>
          </ItineraryStatus>
        </Itinerary>
        {isOpenedModal && (
          <Modal
            hasCloseButton
            lockScrolling={false}
            onClose={ev => {
              ev.stopPropagation();
              setIsOpenedModal(false);
            }}
            labelClose="Close"
            triggerRef={ref}
          >
            <ModalSection>Hidden city info</ModalSection>
          </Modal>
        )}
      </div>
    );
  },

  parameters: {
    info: "Example of modal in Itinerary component. For showing modal click on ItinerarySegment component (Hidden city hack, Check travel doc,...). Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const MultipleBanners: Story = {
  render: function Render() {
    const [isOpenedModal, setIsOpenedModal] = React.useState(false);
    const ref = React.useRef(null);

    return (
      <>
        <Heading type="title2">Throwaway ticketing</Heading>
        <Itinerary>
          <ItineraryStatus type="success" label="This part is new">
            <ItinerarySegment
              banner={
                <Stack direction="column" align="stretch" spacing="200">
                  <ItinerarySegmentBanner ref={ref} onClick={() => setIsOpenedModal(true)}>
                    <ItineraryBadgeList>
                      <ItineraryBadgeListItem type="info" icon={<StarFull color="info" />}>
                        <Text as="span" type="info" weight="bold">
                          Throwaway ticketing hack:{" "}
                        </Text>{" "}
                        You are saving money with this travel hack.
                      </ItineraryBadgeListItem>
                    </ItineraryBadgeList>
                  </ItinerarySegmentBanner>
                  <Separator />
                  <ItinerarySegmentBanner>
                    <ItineraryBadgeList spacing={SPACINGS.ONE_HUNDRED}>
                      <ItineraryBadgeListItem icon={<Location color="secondary" />}>
                        You’ll depart from a different place in New York: John F. Kennedy
                        International.
                      </ItineraryBadgeListItem>
                      <ItineraryBadgeListItem icon={<Location color="secondary" />}>
                        You’ll depart from a different place in New York: John F. Kennedy
                        International.
                      </ItineraryBadgeListItem>
                      <ItineraryBadgeListItem icon={<Accommodation color="secondary" />}>
                        We won’t cover your overnight stay. Hotel coverage is only available if the
                        disruption happens during the trip. If you want to avoid extra hotel costs
                        please choose a different alternative or a refund.
                      </ItineraryBadgeListItem>
                    </ItineraryBadgeList>
                  </ItinerarySegmentBanner>
                </Stack>
              }
            >
              <ItinerarySegmentStop
                city="Barcelona BCN"
                station="Brno-Tuřany"
                date="Mon, 30.1"
                time="17:30"
              />
              <ItinerarySegmentDetail
                duration="2h 30m"
                summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
                content={content}
              />
              <ItinerarySegmentStop
                city="London LHR"
                station="London Heathrow"
                date="Mon, 30.1"
                time="20:00"
              />
            </ItinerarySegment>
          </ItineraryStatus>
          <ItineraryBadgeList>
            <ItineraryBadgeListItem type="warning" icon={<Info color="warning" />}>
              Changing stations is your responsibility.
            </ItineraryBadgeListItem>
            <ItineraryBadgeListItem type="warning" icon={<Clock />}>
              10h 20m layover
            </ItineraryBadgeListItem>
            <ItineraryBadgeListItem type="warning" icon={<SelfTransfer color="warning" />}>
              You need to do a self-transfer in Prague.
            </ItineraryBadgeListItem>
          </ItineraryBadgeList>
          <ItineraryStatus type="success" label="This part is new">
            <ItinerarySegment
              banner={
                <Stack>
                  <ItinerarySegmentBanner>
                    <ItineraryBadgeList>
                      <ItineraryBadgeListItem icon={<StarFull />} type="warning">
                        Hidden city hack: This itinerary finishes in New York (United States), but
                        you’ll get off during the layover.
                      </ItineraryBadgeListItem>
                      <ItineraryBadgeListItem icon={<Visa />}>
                        Check travel document requirements for all destinations, including passport,
                        visa and COVID-19 documents.
                      </ItineraryBadgeListItem>
                      <ItineraryBadgeListItem icon={<BaggageCheckedNone />}>
                        You can’t bring checked or cabin baggage.
                      </ItineraryBadgeListItem>
                    </ItineraryBadgeList>
                  </ItinerarySegmentBanner>
                  <Separator />
                  <ItinerarySegmentBanner>
                    <ItineraryBadgeList>
                      <ItineraryBadgeListItem icon={<Location />} type="warning">
                        You’ll depart from a different place in Prague: Václav Havel Airport Prague
                      </ItineraryBadgeListItem>
                    </ItineraryBadgeList>
                  </ItinerarySegmentBanner>
                </Stack>
              }
            >
              <ItinerarySegmentStop
                city="Prague"
                station="Václav Havel Airport Prague (PRG)"
                time="16:20"
                date="Wed, 15.6"
              />
              <ItinerarySegmentDetail
                duration="2h 10m"
                summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
                content={content}
              />
              <ItinerarySegmentStop
                hidden
                city="Frankfurt"
                time="18:30"
                date="Wed, 15.6"
                station="Frankfurt International Airport "
              />
              <ItinerarySegmentStop city="New York JFK" station="United States" />
            </ItinerarySegment>
          </ItineraryStatus>
        </Itinerary>
        {isOpenedModal && (
          <Modal
            hasCloseButton
            onClose={ev => {
              ev.stopPropagation();
              setIsOpenedModal(false);
            }}
            labelClose="Close"
            triggerRef={ref}
          >
            <ModalSection>Throwaway ticketing info</ModalSection>
          </Modal>
        )}
      </>
    );
  },

  parameters: {
    info: "Example of multiple banners in the Itinerary component. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const RTL: Story = {
  render: () => (
    <>
      <RenderInRtl>
        <Itinerary>
          <ItinerarySegment spaceAfter="medium">
            <ItinerarySegmentStop
              city="Moscow"
              station="Sheremetyevo International Airport (SVO)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail
              icon={<Airplane size="small" />}
              duration="2h 30m"
              summary={<BadgeGroup />}
              content={content}
            />
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="16:35"
            />
          </ItinerarySegment>
          <ItineraryBadgeList>
            <ItineraryBadgeListItem icon={<KiwiComGuarantee />}>
              Connection protected by the Kiwi.com Guarantee
            </ItineraryBadgeListItem>
          </ItineraryBadgeList>
          <ItinerarySegment spaceAfter="large">
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Sat, 20.10"
              time="11:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              date="Fri, 20.10"
              time="16:35"
              type="warning"
            />
          </ItinerarySegment>
        </Itinerary>
      </RenderInRtl>
      <RenderInRtl>
        <Itinerary>
          <ItinerarySegment
            banner={
              <Stack inline align="stretch">
                <ItinerarySegmentBanner onClick={action("onClick")}>
                  <ItineraryBadgeList>
                    <ItineraryBadgeListItem type="info" icon={<StarFull color="info" />}>
                      <Text as="span" type="info" weight="bold">
                        Throwaway ticketing hack:{" "}
                      </Text>{" "}
                      You are saving money with this travel hack.
                    </ItineraryBadgeListItem>
                  </ItineraryBadgeList>
                </ItinerarySegmentBanner>
              </Stack>
            }
          >
            <ItinerarySegmentStop
              city="Barcelona BCN"
              station="Brno-Tuřany"
              date="Mon, 30.1"
              time="17:30"
            />
            <ItinerarySegmentDetail
              duration="2h 30m"
              summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
              content={content}
            />
            <ItinerarySegmentStop
              city="London LHR"
              station="London Heathrow"
              date="Mon, 30.1"
              time="20:00"
            />
          </ItinerarySegment>
        </Itinerary>
      </RenderInRtl>
    </>
  ),

  parameters: {
    info: "RTL example of the Itinerary component. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};
