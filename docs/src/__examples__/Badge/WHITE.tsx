import React from "react";
import { Passengers } from "@kiwicom/orbit-components/icons";
import { PictureCard, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <PictureCard
      image={{
        code: "moscow_ru",
        name: "moscow_ru",
        original: "385x320",
        placeholder: "385x320",
      }}
      height="300px"
      width="400px"
    >
      <Badge type="white" icon={<Passengers />} ariaLabel="4 passengers">
        4
      </Badge>
    </PictureCard>
  ),
};
