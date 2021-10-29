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
  exampleKnobs: [
    {
      component: "PictureCard",
      knobs: [
        {
          name: "height",
          type: "text",
          defaultValue: "300",
        },
        {
          name: "width",
          type: "text",
          defaultValue: "",
        },
        {
          name: "external",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "label",
          type: "text",
          defaultValue: "Activities",
        },
        {
          name: "subTitle",
          type: "text",
          defaultValue: "London to",
        },
        {
          name: "title",
          type: "text",
          defaultValue: "Moscow",
        },
      ],
    },
  ],
};
