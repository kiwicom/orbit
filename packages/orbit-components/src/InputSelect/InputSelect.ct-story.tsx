import * as React from "react";

import InputSelect from ".";

const simpleOptions = [
  {
    title: "Pikachu",
    value: "Pikachu",
    prefix: "PIKA PIKA",
  },
  {
    title: "Charizard",
    value: "Charizard",
  },
  {
    title: "Bulbasaur",
    value: "Bulbasaur",
  },
  {
    title: "Squirtle",
    value: "Squirtle",
  },
  {
    title: "Jigglypuff",
    value: "Jigglypuff",
  },
];

const advancedOptions = [
  {
    title: "Pikachu",
    value: "Pikachu",
    group: "Starters",
    description: "This Pokémon has electricity-storing pouches on its cheeks.",
    prefix: "PIKA",
  },
  {
    title: "Charizard",
    value: "Charizard",
    group: "Evolutions",
  },
  {
    title: "Bulbasaur",
    value: "Bulbasaur",
    group: "Starters",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  },
  {
    title: "Gengar",
    value: "Gengar",
    group: "Evolutions",
  },
  {
    title: "Mewtwo",
    value: "Mewtwo",
  },
];

export function InputSelectStory() {
  return (
    <div className="gap-400 p-400 flex flex-col">
      <InputSelect options={simpleOptions} />
      <InputSelect options={simpleOptions} label="Custom label" placeholder="Custom placeholder" />
      <InputSelect
        options={simpleOptions}
        label="Custom label"
        placeholder="Custom Placeholder"
        disabled
      />
      <InputSelect
        options={simpleOptions}
        label="Custom label (readOnly)"
        defaultSelected={simpleOptions[0]}
        readOnly
      />
      <InputSelect options={simpleOptions} label="Custom label" required />
      <InputSelect options={simpleOptions} defaultSelected={simpleOptions[0]} />
      <InputSelect
        options={simpleOptions}
        label="Custom label"
        help="Do or do not. There is no try."
      />
      <InputSelect
        options={simpleOptions}
        label="Custom label"
        help="Do or do not. There is no try."
        required
      />
      <InputSelect options={simpleOptions} label="Custom label" error="You shall not pass!" />
      <InputSelect
        options={simpleOptions}
        label="Custom label"
        error="You shall not pass!"
        required
      />
      <InputSelect options={simpleOptions} width="100px" />
    </div>
  );
}

export function InputSelectDropdownStory() {
  return (
    <div className="p-400 min-h-[600px]">
      <InputSelect options={simpleOptions} dataTest="Dropdown" />
    </div>
  );
}

export function InputSelectDropdownSizesStory() {
  return (
    <div className="p-400 min-h-[600px]">
      <InputSelect options={simpleOptions} dataTest="Dropdown" maxWidth="200px" maxHeight="200px" />
    </div>
  );
}

export function InputSelectDropdownEmptyStory() {
  return (
    <div className="p-400 min-h-[600px]">
      <InputSelect options={[]} dataTest="Dropdown" emptyState="I ain't no Pokémon" />
    </div>
  );
}

export function InputSelectDropdownGroupsStory() {
  return (
    <div className="p-400 min-h-[600px]">
      <InputSelect options={advancedOptions} dataTest="Dropdown" />
    </div>
  );
}
