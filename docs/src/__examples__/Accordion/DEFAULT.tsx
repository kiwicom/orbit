import * as React from "react";
import {
  Accordion,
  AccordionSection,
  ButtonLink,
  Heading,
  Inline,
  Seat,
  Stack,
  Text,
} from "@kiwicom/orbit-components";
import { FlightDirect } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [expandedSection, setExpandedSection] = React.useState("");
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
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
        <AccordionSection
          id="outbound"
          header={
            <Heading as="h3" type="title3">
              <Inline>
                Seating for Barcelona
                <FlightDirect ariaLabel=" to " />
                Boston
              </Inline>
            </Heading>
          }
        >
          <SeatMap direction="outbound" />
        </AccordionSection>
        <AccordionSection
          id="inbound"
          header={
            <Heading as="h3" type="title3">
              <Inline>
                Seating for Boston
                <FlightDirect ariaLabel=" to " />
                Barcelona
              </Inline>
            </Heading>
          }
        >
          <SeatMap direction="inbound" />
        </AccordionSection>
      </Accordion>
    );
  },
  knobs: [
    { name: "loading", type: "boolean", defaultValue: false },
    {
      name: "spaceAfter",
      type: "select",
      defaultValue: "none",
      options: ["none", "smallest", "small", "normal", "medium", "large", "largest"],
    },
  ],
};
