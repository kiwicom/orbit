import * as React from "react";
import { Tile, TileGroup } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => (
    <TileGroup>
      <Tile
        icon={<Icons.BaggageChecked />}
        href="https://www.kiwi.com/en/?help=%2Ffaq%2Fbaggage-131"
        external
        title="Baggage"
        description="Everything you need to know about your baggage allowance."
      />
      <Tile
        icon={<Icons.Child />}
        href="https://www.kiwi.com/?help=%2Ffaq%2Ftraveling-with-children-120"
        external
        title="Traveling with children"
        description="How to bring your family with you."
      />
      <Tile
        icon={<Icons.Meal />}
        href="https://www.kiwi.com/en/?help=%2Ffaq%2Fseats-meals-and-pets-133%2Farticle%2Fhow-do-i-pre-book-my-meals-3"
        external
        title="Meals"
        description="Choose a tasty meal to enjoy on your trip."
      />
    </TileGroup>
  ),
  info: {
    title: "Default tile group",
    description:
      "Tile groups can contain many things. To keep the proper styling, don't include any DOM elements other than tiles.",
  },
};
