import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import styled, { css } from "styled-components";
import { action } from "@storybook/addon-actions";

import Modal, { ModalSection } from "../Modal";
import * as Icons from "../icons";
import {
  KiwicomGuarantee as Guarantee,
  Airplane,
  AlertCircle,
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
import defaultTheme from "../defaultTheme";
import Separator from "../Separator";

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

const StyledText = styled.span<{ type?: string; weight?: string }>`
  ${({ theme, type }) => css`
    font-weight: ${theme.orbit.fontWeightBold};
    font-size: ${theme.orbit.fontSizeTextSmall};
    font-family: ${theme.orbit.fontFamily};
    color: ${type === "warning" ? theme.orbit.paletteOrangeNormal : theme.orbit.paletteBlueNormal};
  `}
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const BadgeGroup = () => {
  const carriers = [{ code: "REGIOJETT", name: "Regiojet" }];

  return (
    <Stack flex align="center" spacing="XSmall">
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge carriers={carriers} border={false}>
        Regiojet
      </Badge>
      <Badge border={false}>1 stop</Badge>
    </Stack>
  );
};

export const BadgeList = () => {
  return (
    <Stack flex direction="column">
      <ItineraryBadgeList>
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
        <ItineraryBadgeListItem icon={<Guarantee />}>
          Connection protected by the Kiwi.com Guarantee
        </ItineraryBadgeListItem>
        <ItineraryBadgeListItem icon={<Info />} type="info">
          Rooms from 35 € by Booking.com
        </ItineraryBadgeListItem>
      </ItineraryBadgeList>
      <ItineraryBadgeList>
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

export const Segment = () => {
  return (
    <Stack spacing="large">
      <Itinerary>
        <ItinerarySegment>
          <ItinerarySegmentStop
            city="Prague"
            station="Václav Havel Airport Prague (PRG)"
            date="Fri, 19.10"
            time="14:05"
          />
          <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
          <ItinerarySegmentStop
            city="Milan"
            station="Milan Bergamo International Airport (BGY)"
            date="Fri, 19.10"
            time="16:35"
          />
        </ItinerarySegment>
      </Itinerary>
      <Heading type="title2">Without ItinerarySegmentDetail content</Heading>
      <Itinerary>
        <ItinerarySegment actionable={false}>
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
      <Itinerary>
        <ItinerarySegment actionable={false}>
          <ItinerarySegmentStop
            city="Madrid"
            cancelledCity="Barcelona"
            cancelledStation="Girona Airport"
            type="critical"
            station="Adolfo Suarez Madrid - Barajas Airport"
            date="Mon, 31.1"
            cancelledDate="Mon, 30.1"
            time="17:55"
            cancelledTime="17:45"
          />
          <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} />
          <ItinerarySegmentStop
            city="Milan"
            station="Milan Bergamo International Airport (BGY)"
            date="Wed, 02.02"
            time="16:35"
          />
        </ItinerarySegment>
      </Itinerary>
    </Stack>
  );
};

export const Status = () => {
  return (
    <>
      <Itinerary>
        <ItineraryStatus type="critical" label="Rescheduled · 4h later" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              type="critical"
              time="14:05"
              cancelledTime="12:50"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
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
        <ItineraryBadgeList spaceAfter="medium">
          <ItineraryBadgeListItem icon={<AlertCircle />}>
            The layover in Vienna is too short
          </ItineraryBadgeListItem>
        </ItineraryBadgeList>
        <ItineraryStatus type="warning" label="Affected connection">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="18:15"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              date="Fri, 19.10"
              time="19:20"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
      <Itinerary>
        <ItineraryStatus type="info" label="Added stopover" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="15:35"
            />
          </ItinerarySegment>
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="18:15"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Milan"
              station="Milan Bergamo International Airport (BGY)"
              date="Fri, 19.10"
              time="19:20"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
      <Itinerary>
        <ItineraryStatus type="success" label="Your new alternative" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="15:35"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
      <Itinerary>
        <ItineraryStatus type="neutral" label="Your new alternative" spaceAfter="medium">
          <ItinerarySegment noElevation>
            <ItinerarySegmentStop
              city="Prague"
              station="Václav Havel Airport Prague (PRG)"
              date="Fri, 19.10"
              time="14:05"
            />
            <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
            <ItinerarySegmentStop
              city="Vienna"
              station="Vienna International Airport"
              date="Fri, 19.10"
              time="15:35"
            />
          </ItinerarySegment>
        </ItineraryStatus>
      </Itinerary>
    </>
  );
};

export const ItinerarySeparatorComponent = () => {
  return (
    <Stack direction="column">
      <ItinerarySeparator>
        <Text weight="bold">8 nights in Barcelona</Text>
      </ItinerarySeparator>
      <ItinerarySeparator />
    </Stack>
  );
};

export const Stop = () => {
  const date = text("date", "Fr, 19.10");
  const time = text("time", "14:05");
  const station = text("station", "Václav Havel Airport Prague (PRG)");
  const city = text("city", "Prague");
  const type = select("type", [undefined, "warning", "critical", "success", "info"], undefined);
  const hidden = boolean("hidden", false);

  return (
    <Stack spacing="large">
      <Heading type="title2">Regular stop</Heading>
      <ItinerarySegmentStop
        city={city}
        station={station}
        hidden={hidden}
        date={date}
        time={time}
        type={type}
      />
      <Heading type="title2">Hidden city example</Heading>
      <Itinerary>
        <ItinerarySegment
          banner={
            <Stack inline align="stretch">
              <ItinerarySegmentBanner>
                <ItineraryBadgeList>
                  <ItineraryBadgeListItem type="warning" icon={<StarFull color="warning" />}>
                    <StyledText as="span" type="warning">
                      Hidden city hack:{" "}
                    </StyledText>{" "}
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
            summary={
              <Badge carriers={[{ code: "FR", name: "Ryanair" }]} border={false}>
                Ryanair
              </Badge>
            }
            content={content}
          />
          <ItinerarySegmentStop
            city="Barcelona BCN"
            station="El Prat de LIobregat"
            hidden
            date="Mon, 30.1"
            time="20:00"
          />
          <ItinerarySegmentStop
            city={<Text type="secondary">New York JFK</Text>}
            station={
              <Stack flex align="center" spacing="XSmall">
                <CountryFlag code="US" size="small" />
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
                    <StyledText as="span" type="info" weight="bold">
                      Throwaway ticketing hack:{" "}
                    </StyledText>{" "}
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
            summary={
              <Badge carriers={[{ code: "FR", name: "Ryanair" }]} border={false}>
                Ryanair
              </Badge>
            }
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
};

export const Detail = () => {
  return (
    <ItinerarySegment noElevation>
      <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />} content={content} />
    </ItinerarySegment>
  );
};

export const Default = () => {
  const source = select("icon", Object.keys(Icons), "Airplane");
  const Icon = Icons[source];

  return (
    <Itinerary>
      <ItinerarySegment spaceAfter="medium">
        <ItinerarySegmentStop
          city="Moscow"
          station="Sheremetyevo International Airport (SVO)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail
          icon={<Icon size="small" />}
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
        <ItineraryBadgeListItem icon={<Guarantee />}>
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
  );
};

export const InsideModal = () => {
  const [isOpenedModal, setIsOpenedModal] = React.useState(false);

  return (
    <>
      <Modal>
        <ModalSection>
          <Itinerary>
            <ItineraryStatus type="success" label="This part is new">
              <ItinerarySegment
                banner={
                  <Stack>
                    <ItinerarySegmentBanner
                      onClick={ev => {
                        ev.stopPropagation();
                        setIsOpenedModal(true);
                      }}
                    >
                      <ItineraryBadgeList>
                        <ItineraryBadgeListItem icon={<StarFull />} type="warning">
                          Hidden city hack: This itinerary finishes in New York (United States), but
                          you’ll get off during the layover.
                        </ItineraryBadgeListItem>
                        <ItineraryBadgeListItem icon={<Visa />}>
                          Check travel document requirements for all destinations, including
                          passport, visa and COVID-19 documents.
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
                          You’ll depart from a different place in Prague: Václav Havel Airport
                          Prague
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
                  summary={
                    <Badge carriers={[{ code: "FR", name: "Ryanair" }]} border={false}>
                      Ryanair
                    </Badge>
                  }
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
        </ModalSection>
      </Modal>
      {isOpenedModal && (
        <Modal
          hasCloseButton
          onClose={ev => {
            ev.stopPropagation();
            setIsOpenedModal(false);
          }}
        >
          <ModalSection>Hidden city info</ModalSection>
        </Modal>
      )}
    </>
  );
};

export const MultipleBanners = () => {
  const [isOpenedModal, setIsOpenedModal] = React.useState(false);

  return (
    <>
      <Heading type="title2">Throwaway ticketing</Heading>
      <Itinerary>
        <ItineraryStatus type="success" label="This part is new">
          <ItinerarySegment
            banner={
              <Stack direction="column" align="stretch" spacing="XSmall">
                <ItinerarySegmentBanner onClick={() => setIsOpenedModal(true)}>
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
                  <ItineraryBadgeList>
                    <Stack spacing="XSmall">
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
                    </Stack>
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
              summary={
                <Badge carriers={[{ code: "FR", name: "Ryanair" }]} border={false}>
                  Ryanair
                </Badge>
              }
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
              summary={
                <Badge carriers={[{ code: "FR", name: "Ryanair" }]} border={false}>
                  Ryanair
                </Badge>
              }
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
        >
          <ModalSection>Throwaway ticketing info</ModalSection>
        </Modal>
      )}
    </>
  );
};

export const RTL = () => {
  const source = select("icon", Object.keys(Icons), "Airplane");
  const Icon = Icons[source];

  return (
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
              icon={<Icon size="small" />}
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
            <ItineraryBadgeListItem icon={<Guarantee />}>
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
                      <StyledText as="span" type="info" weight="bold">
                        Throwaway ticketing hack:{" "}
                      </StyledText>{" "}
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
              summary={
                <Badge carriers={[{ code: "FR", name: "Ryanair" }]} border={false}>
                  Ryanair
                </Badge>
              }
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
  );
};

export default {
  title: "Itinerary",
  component: Itinerary,
  includeStories: [
    "BadgeList",
    "CarrierBadge",
    "Default",
    "Detail",
    "RTL",
    "Segment",
    "ItinerarySeparatorComponent",
    "MultipleBanners",
    "Status",
    "Stop",
    "InsideModal",
  ],
};
