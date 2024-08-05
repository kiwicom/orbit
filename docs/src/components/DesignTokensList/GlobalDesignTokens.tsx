import React from "react";
import tokensList from "@kiwicom/orbit-design-tokens/output/docs-tokens.json";
import globalCategories from "@kiwicom/orbit-design-tokens/output/docs-categories.json";
import { Separator, Select, InputField, Stack, Box } from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

import DesignTokensTable from "./components/DesignTokensTable";
import OptionsFilter from "./OptionsFilter";
import { GlobalCategories, Platforms, TypographyCategories } from "./types.d";
import useDebounce from "./useDebounce";

const categories = globalCategories.categories as (keyof typeof GlobalCategories)[];

const allTokens = Object.entries(tokensList).map(([name, value]) => ({
  name,
  value,
}));

const groupedCategories = [...categories, "deprecated"]
  .map(category => {
    if (category in TypographyCategories) return "typography";
    return category;
  })
  .filter((v, i, a) => a.indexOf(v) === i);

const globalTokens = Object.assign(
  {},
  ...groupedCategories.map(category => {
    const categoryTokens = allTokens.filter(token => {
      const { namespace, object } = token.value.schema;

      if (token.value.deprecated) return category === "deprecated";

      if (namespace === "global") {
        if (category === "typography" && object in TypographyCategories) return true;
        return object === category;
      }

      return false;
    });
    return { [category]: categoryTokens };
  }),
);

const GlobalDesignTokens = () => {
  const [filter, setFilter] = React.useState<string>("");
  const [platform, setPlatform] = React.useState<keyof typeof Platforms>("javascript");
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const handleSelectCategory = (name: string) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(prev => prev.filter(category => category !== name));
      return;
    }

    setSelectedCategories(prev => [...prev, name]);
  };

  const debouncedFilter = useDebounce(filter, 300);

  return (
    <Stack spacing="600">
      <Stack spacing="400" direction="row">
        <InputField
          prefix={<Search />}
          placeholder="Filter design tokens from categories..."
          value={filter}
          onChange={event => setFilter(event.currentTarget.value)}
        />
        <Box maxWidth="200px" width="full">
          <Select
            value={platform}
            onChange={event => {
              const value = event.currentTarget.value as Platforms;
              setPlatform(value);
            }}
            options={[
              { value: "placeholder", label: "Platform", disabled: true },
              { value: "javascript", label: "Javascript" },
              { value: "foundation", label: "Foundation alias" },
            ]}
          />
        </Box>
      </Stack>
      <OptionsFilter
        label="Selected categories"
        value={selectedCategories}
        options={groupedCategories.map(c => ({ key: c, name: GlobalCategories[c] }))}
        onChange={handleSelectCategory}
      />
      <Separator />
      {Object.entries(globalTokens).map(([category, value]) => {
        if (
          Array.isArray(value) &&
          category in GlobalCategories &&
          (selectedCategories.length === 0 || selectedCategories.includes(category))
        ) {
          const name = GlobalCategories[category];
          return (
            <DesignTokensTable
              tokens={value}
              filter={debouncedFilter}
              platform={platform}
              showReplacement={category === "deprecated"}
              tableName={name}
            />
          );
        }
        return null;
      })}
    </Stack>
  );
};

export default GlobalDesignTokens;
