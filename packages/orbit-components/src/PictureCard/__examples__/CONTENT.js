// @flow
import * as React from "react";

import Badge from "../../Badge";
import PictureCard from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack>
      <PictureCard
        label="Family fun"
        subTitle={
          <Stack>
            London <Icons.FlightReturn ariaLabel="to and from" />
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
          upcoming or taken trips.
        </Text>
        <PictureCard
          title={
            <Stack>
              London <Icons.FlightDirect ariaLabel="to" /> Athens
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
            <Badge type="white" icon={<Icons.Passengers />} ariaLabel="4 passengers">
              4
            </Badge>
          </Stack>
        </PictureCard>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Content",
    description:
      "You can add content to the card in various places. Including any of them makes the card focusable and creates an effect on hover/focus.",
  },
};
