import React from "react";
import { PictureCard } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <PictureCard
        image={{
          code: "moscow_ru",
          name: "moscow_ru",
          original: "385x320",
          placeholder: "385x320",
        }}
        label="Activities"
        href="https://www.kiwi.com/us/landing/-/moscow-russia"
        subTitle="London to"
        title="Moscow"
      >
        from 2,563 Kč
      </PictureCard>
    );
  },
  info: {
    title: "Default pagination",
    description: "By default, all pages up to 7 are displayed as buttons on large screens.",
  },
};
