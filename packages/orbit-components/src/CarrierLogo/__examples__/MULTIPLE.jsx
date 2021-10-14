// @flow
import * as React from "react";

import CarrierLogo from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
          {
            code: "TO",
            type: "airline",
            name: "Transavia France",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
          {
            code: "TO",
            type: "airline",
            name: "Transavia France",
          },
          {
            code: "VY",
            type: "airline",
            name: "Vueling",
          },
        ]}
      />
    </Stack>
  ),
  info: {
    title: "Multiple carriers",
    description: "Carrier logos can include up to four carriers.",
  },
};
