import React from "react";
import tokensList from "@kiwicom/orbit-design-tokens/output/docs-tokens.json";
import componentCategories from "@kiwicom/orbit-design-tokens/output/docs-components.json";
import { Separator, Select, InputField, Stack, Box } from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";
import { camelCase } from "lodash";

import DesignTokensTable from "./components/DesignTokensTable";
import { Platforms } from "./types.d";
import useDebounce from "./useDebounce";

const allTokens = Object.entries(tokensList).map(([name, value]) => ({
  name,
  value,
}));

const componentTokens = Object.assign(
  {},
  ...componentCategories.categories
    .filter(category => category !== "background")
    .map(category => {
      const categoryTokens = allTokens.filter(
        ({
          value: {
            schema: { namespace, object },
          },
        }) => {
          return namespace === "component" && object === category;
        },
      );
      return { [category]: categoryTokens };
    }),
);

const ComponentDesignTokens = () => {
  const [filter, setFilter] = React.useState<string>("");
  const [platform, setPlatform] = React.useState<keyof typeof Platforms>("javascript");
  const debouncedFilter = useDebounce(filter, 300);

  return (
    <Stack spacing="large">
      <Stack spacing="medium" direction="row">
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
      <Separator />
      {Object.entries(componentTokens).map(([category, value]) => {
        if (Array.isArray(value)) {
          const name = `${camelCase(category)} tokens`;
          return (
            <DesignTokensTable
              tokens={value}
              filter={debouncedFilter}
              platform={platform}
              tableName={name}
              showVariantColumn
            />
          );
        }
        return null;
      })}
    </Stack>
  );
};

export default ComponentDesignTokens;
