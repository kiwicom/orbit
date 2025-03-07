import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CountryFlag from "../CountryFlag";

import InputSelect from ".";

const options = [
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
];

const pokemonOptions = [
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
];

const meta: Meta<typeof InputSelect> = {
  title: "InputSelect",
  component: InputSelect,

  parameters: {
    controls: {
      exclude: ["onChange", "onFocus", "onClose", "onOptionSelect", "onBlur", "onSelect"],
    },
  },

  args: {
    options,
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onOptionSelect: action("onOptionSelect"),
    onClose: action("onClose"),
    onBlur: action("onBlur"),
    onSelect: action("onSelect"),
    placeholder: "Select currency",
    prevSelectedLabel: "Previously selected",
    showAll: true,
    maxHeight: "400px",
    readOnly: false,
    emptyState: "No results found.",
    labelClose: "Close",
  },
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

export const Grouped: Story = {
  render: args => (
    <div className="min-h-[500px]">
      <InputSelect {...args} />
    </div>
  ),

  parameters: {
    info: "By default, grouped options are displayed first and then all options are displayed below. Groups are no longer considered after a search is made. If showAll is false, only the options with no group are displayed after the grouped ones.",
    controls: {
      exclude: [
        "onChange",
        "onFocus",
        "onClose",
        "onOptionSelect",
        "onBlur",
        "onSelect",
        "prevSelectedLabel",
        "showAllLabel",
        "labelClose",
        "emptyState",
      ],
    },
  },
};

export const PreviouslySelected: Story = {
  render: args => (
    <div className="min-h-[500px]">
      <InputSelect {...args} prevSelected={options[2]} defaultSelected={options[2]} />
    </div>
  ),

  parameters: {
    info: "If prevSelected is defined, the option is presented on top of every other options.",
    controls: {
      exclude: [
        "onChange",
        "onFocus",
        "onClose",
        "onOptionSelect",
        "onBlur",
        "onSelect",
        "showAllLabel",
        "labelClose",
        "emptyState",
      ],
    },
  },
};

export const Playground: Story = {
  render: args => (
    <div className="min-h-[500px]">
      <InputSelect {...args} />
    </div>
  ),

  args: {
    options: pokemonOptions,
    defaultSelected: pokemonOptions[0],
    label: "Choose your pokemon",
    placeholder: "Search for pokemon",
    disabled: false,
    showAllLabel: "All options",
    required: false,
    help: "",
    error: "",
    width: "",
    maxWidth: "",
    prevSelected: undefined,
    name: "",
    tabIndex: "",
    id: "",
    insideInputGroup: false,
  },
};
