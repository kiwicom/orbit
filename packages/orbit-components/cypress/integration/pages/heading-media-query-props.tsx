import React from "react";
import { Heading } from "@kiwicom/orbit-components";

export default function HeadingMediaProps() {
  return (
    <Heading
      type="title0"
      mediumMobile={{ type: "display" }}
      largeMobile={{ spaceAfter: "small", type: "title2" }}
      tablet={{ align: "center", type: "title4" }}
      desktop={{ type: "title5" }}
      largeDesktop={{ type: "title6" }}
    >
      Heading
    </Heading>
  );
}
