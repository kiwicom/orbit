import React from "react";
import { AirportIllustration } from "@kiwicom/orbit-components";

export default {
  Example: () => <AirportIllustration name="BUDFastTrack" />,
  exampleKnobs: [
    {
      component: "AirportIllustration",
      knobs: [
        {
          name: "size",
          type: "select",
          options: ["extraSmall", "small", "medium", "large", "displays"],
          defaultValue: "",
        },
        {
          name: "spaceAfter",
          type: "select",
          defaultValue: "none",
          options: ["none", "smallest", "small", "normal", "medium", "large", "largest"],
        },
        {
          name: "name",
          type: "select",
          defaultValue: "",
          options: [
            "BGYFastTrack",
            "BUDFastTrack",
            "MRSSmartPass",
            "NCEFastTrack",
            "PRGSmartPass",
            "VCESmartPass",
          ],
        },
      ],
    },
  ],
};
