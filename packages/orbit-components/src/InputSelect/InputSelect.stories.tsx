import React from "react";
import { action } from "@storybook/addon-actions";

import CountryFlag from "../CountryFlag";

import InputSelect from ".";

export default {
  title: "InputSelect",
};

export const Grouped = ({ options, showAll, readOnly }) => {
  return (
    <div className="min-h-[1000px]">
      <InputSelect
        placeholder="Select currency"
        options={options}
        onClose={action("onClose")}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onOptionSelect={action("onOptionSelect")}
        showAll={showAll}
        readOnly={readOnly}
      />
    </div>
  );
};

Grouped.story = {
  name: "Grouped",
  parameters: {
    info: "By default, grouped options are displayed first and then all options are displayed below. Groups are no longer considered after a search is made. If showAll is false, only the options with no group are displayed after the grouped ones.",
  },
};

Grouped.args = {
  options: [
    {
      title: "Euro",
      value: "EUR",
      group: "Popular",
      prefix: <CountryFlag code="eu" />,
    },
    {
      title: "US Dollar",
      value: "USD",
      group: "Popular",
      prefix: <CountryFlag code="us" />,
    },
    {
      title: "Pound Sterling",
      value: "GBP",
      group: "Popular",
      prefix: <CountryFlag code="gb" />,
    },
    {
      title: "Australian Dollar",
      value: "AUD",
      prefix: <CountryFlag code="au" />,
    },
    {
      title: "Brazilian Real",
      value: "BRL",
      prefix: <CountryFlag code="br" />,
    },
    {
      title: "Czech Koruna",
      value: "CZK",
      prefix: <CountryFlag code="cz" />,
    },
  ],
  showAll: true,
  readOnly: false,
};

export const PreviouslySelected = ({ options, showAll, readOnly, prevSelectedLabel }) => {
  return (
    <div className="min-h-[1000px]">
      <InputSelect
        placeholder="Select currency"
        options={options}
        onClose={action("onClose")}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onOptionSelect={action("onOptionSelect")}
        showAll={showAll}
        readOnly={readOnly}
        prevSelected={options[2]}
        prevSelectedLabel={prevSelectedLabel}
        defaultSelected={options[2]}
      />
    </div>
  );
};

PreviouslySelected.story = {
  name: "Previously Selected",
  parameters: {
    info: "If prevSelected is defined, the option is presented on top of every other options.",
  },
};

PreviouslySelected.args = {
  showAll: true,
  readOnly: false,
  prevSelectedLabel: "Previously selected",
  options: [
    {
      title: "Euro",
      value: "EUR",
      group: "Popular",
    },
    {
      title: "US Dollar",
      value: "USD",
      group: "Popular",
    },
    {
      title: "Pound Sterling",
      value: "GBP",
      group: "Popular",
    },
    {
      title: "Australian Dollar",
      value: "AUD",
    },
    {
      title: "Brazilian Real",
      value: "BRL",
    },
    {
      title: "Czech Koruna",
      value: "CZK",
    },
  ],
};

export const Playground = ({
  options,
  label,
  placeholder,
  disabled,
  emptyState,
  showAll,
  showAllLabel,
  readOnly,
  required,
  help,
  error,
  width,
  maxWidth,
  maxHeight,
  hasError,
  hasHelp,
}) => {
  return (
    <div className="min-h-[1000px]">
      <InputSelect
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        label={label}
        width={width}
        help={hasHelp && help}
        error={hasError && error}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        options={options}
        onClose={action("onClose")}
        onChange={action("onChange")}
        onOptionSelect={action("onOptionSelect")}
        emptyState={emptyState}
        showAll={showAll}
        showAllLabel={showAllLabel}
        readOnly={readOnly}
      />
    </div>
  );
};

Playground.args = {
  options: [
    {
      title: "Pikachu",
      value: "Pikachu",
      group: "Starters",
      description:
        "This Pokémon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after waking up.",
    },
    {
      title: "Charizard",
      value: "Charizard",
      group: "Evolutions",
      description:
        "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    },
    {
      title: "Bulbasaur",
      value: "Bulbasaur",
      group: "Starters",
      description:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    },
    {
      title: "Squirtle",
      value: "Squirtle",
      group: "Starters",
      description:
        "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    },
    {
      title: "Jigglypuff",
      value: "Jigglypuff",
      group: "Others",
      description:
        "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    },
    {
      title: "Gengar",
      value: "Gengar",
      group: "Evolutions",
      description:
        "Gengar is a shadow-like Pokémon that lurks in the darkness. It is said to emerge from darkness to steal the lives of those who become lost in mountains.",
    },
    {
      title: "Dragonite",
      value: "Dragonite",
      group: "Evolutions",
      description:
        "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
    },
    {
      title: "Mewtwo",
      value: "Mewtwo",
      description:
        "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.",
    },
    {
      title: "Gyarados",
      value: "Gyarados",
      group: "Evolutions",
      description:
        "Gyarados is a Pokémon that has been known to cause major disasters. A vicious Pokémon from the sea, it appears wherever there is conflict to incite rage and cause destruction.",
    },
    {
      title: "Eevee",
      value: "Eevee",
      group: "Starters",
      description:
        "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
    },
  ],
  label: "Choose your pokemon",
  placeholder: "Search for pokemon",
  disabled: false,
  emptyState: "No results found.",
  showAll: true,
  showAllLabel: "All options",
  required: false,
  help: "Help message",
  error: "Error message",
  width: "",
  maxWidth: "",
  maxHeight: "400px",
  hasError: false,
  hasHelp: false,
};
