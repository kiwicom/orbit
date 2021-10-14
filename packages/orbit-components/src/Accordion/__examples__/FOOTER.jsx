// @flow
import * as React from "react";

import Accordion from "../index";
import AccordionSection from "../AccordionSection/index";
import ButtonLink from "../../ButtonLink";
import Heading from "../../Heading";
import Seat from "../../Seat";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
    const [expandedSection, setExpandedSection] = React.useState("outbound");
    const [selectedOutboundSeat, setSelectedOutboundSeat] = React.useState("1A");
    const [selectedInboundSeat, setSelectedInboundSeat] = React.useState("1A");

    const seatType = (currentSeat, direction) => {
      if (direction === "outbound") {
        return selectedOutboundSeat === currentSeat ? "legroom" : "default";
      }
      return selectedInboundSeat === currentSeat ? "legroom" : "default";
    };
    const SeatButton = ({ currentSeat, direction }) => (
      <ButtonLink
        compact
        onClick={() =>
          direction === "outbound"
            ? setSelectedOutboundSeat(currentSeat)
            : setSelectedInboundSeat(currentSeat)
        }
      >
        <Seat type={seatType(currentSeat, direction)} />
      </ButtonLink>
    );

    const SeatRow = ({ direction, rowNumber }) => (
      <Stack direction="row" align="center">
        <SeatButton direction={direction} currentSeat={`${rowNumber}A`} />
        <SeatButton direction={direction} currentSeat={`${rowNumber}B`} />
        <Text>{rowNumber}</Text>
        <SeatButton direction={direction} currentSeat={`${rowNumber}C`} />
        <SeatButton direction={direction} currentSeat={`${rowNumber}D`} />
      </Stack>
    );
    const SeatMap = ({ direction }) => (
      <Stack>
        <Stack direction="row" align="center">
          <Stack inline grow={false} align="center" direction="column">
            <Text>A</Text>
            <SeatButton direction={direction} currentSeat="1A" />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>B</Text>
            <SeatButton direction={direction} currentSeat="1B" />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text> </Text>
            <Text> </Text>
            <Text>1</Text>
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>C</Text>
            <SeatButton direction={direction} currentSeat="1C" />
          </Stack>
          <Stack inline grow={false} align="center" direction="column">
            <Text>D</Text>
            <SeatButton direction={direction} currentSeat="1D" />
          </Stack>
        </Stack>
        <SeatRow direction={direction} rowNumber={2} />
        <SeatRow direction={direction} rowNumber={3} />
        <SeatRow direction={direction} rowNumber={4} />
        <SeatRow direction={direction} rowNumber={5} />
        <SeatRow direction={direction} rowNumber={6} />
        <SeatRow direction={direction} rowNumber={7} />
      </Stack>
    );

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          footer={
            <Stack justify="center">
              <ButtonLink type="primary" onClick={() => setExpandedSection("inbound")}>
                Continue to next segment
              </ButtonLink>
            </Stack>
          }
          id="outbound"
          header={
            <Heading as="h3" type="title3">
              Seating for Barcelona
              <Icons.FlightDirect ariaLabel=" to " />
              Boston
            </Heading>
          }
        >
          <SeatMap direction="outbound" />
        </AccordionSection>
        <AccordionSection
          footer={
            <Stack justify="center">
              <ButtonLink type="secondary" onClick={() => setExpandedSection("outbound")}>
                Back to previous segment
              </ButtonLink>
            </Stack>
          }
          id="inbound"
          header={
            <Heading as="h3" type="title3">
              Seating for Boston
              <Icons.FlightDirect ariaLabel=" to " />
              Barcelona
            </Heading>
          }
        >
          <SeatMap direction="inbound" />
        </AccordionSection>
      </Accordion>
    );
  },
  info: {
    title: "Section footer",
    description:
      "Section footers are sticky and useful for actions related to the whole section and navigation between sections.",
  },
};
