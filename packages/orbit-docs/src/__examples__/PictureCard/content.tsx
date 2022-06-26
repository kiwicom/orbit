import React from "react";
import { Badge, PictureCard, Stack, Text } from "@kiwicom/orbit-components";
import { FlightDirect, FlightReturn, Passengers } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
      <Text>Standard content is automatically displayed in inverted colors.</Text>
      <PictureCard
        label="Family fun"
        subTitle={
          <Stack>
            London <FlightReturn ariaLabel="to and from" />
          </Stack>
        }
        title="Athens"
        image={{
          code: "athens_gr",
          name: "",
          original: "1200x628",
        }}
      >
        7 nights from €50
      </PictureCard>
      <Stack>
        <Text>
          You can include any kind of content within the card, such as badges to show details about
          upcoming or taken trips. Make sure to use inverted colors.
        </Text>
        <PictureCard
          title={
            <Stack>
              London <FlightDirect ariaLabel="to" /> Athens
            </Stack>
          }
          image={{
            code: "athens_gr",
            name: "",
            original: "600x330",
            placeholder: "30x30",
          }}
          height="260px"
          width="400px"
        >
          <Stack flex>
            <Badge type="successInverted">Confirmed</Badge>
            <Badge type="infoInverted">Fri 8/30</Badge>
            <Badge type="white" icon={<Passengers />} ariaLabel="4 passengers">
              4
            </Badge>
          </Stack>
        </PictureCard>
      </Stack>
    </Stack>
  ),
};
