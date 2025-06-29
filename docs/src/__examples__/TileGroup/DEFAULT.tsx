import React from "react";
import { Tile, TileGroup, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";
import { BaggageChecked30, Child, Meal } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <TileGroup>
        <Tile
          icon={<BaggageChecked30 ariaHidden />}
          href="https://www.kiwi.com/en/?help=%2Ffaq%2Fbaggage-131"
          external
          title="Baggage"
          description="Everything you need to know about your baggage allowance."
        />
        <Tile
          icon={<Child ariaHidden />}
          href="https://www.kiwi.com/?help=%2Ffaq%2Ftraveling-with-children-120"
          external
          title="Traveling with children"
          description="How to bring your family with you."
        />
        <Tile
          icon={<Meal ariaHidden />}
          href="https://www.kiwi.com/en/?help=%2Ffaq%2Fseats-meals-and-pets-133%2Farticle%2Fhow-do-i-pre-book-my-meals-3"
          external
          title="Meals"
          description="Choose a tasty meal to enjoy on your trip."
        />
      </TileGroup>
    </OrbitProvider>
  ),
};
