import * as React from "react";
import tokensList from "@kiwicom/orbit-design-tokens/lib/docs-tokens.json";
import componentCategories from "@kiwicom/orbit-design-tokens/lib/docs-components.json";
import { Separator, Select, InputField, Stack, Box, Checkbox } from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

import DesignTokensTable from "./components/DesignTokensTable";
import camelCase from "../../utils/camelCase";
import { Platforms, Token } from "./typings";

// @ts-expect-error force type because Object.entries makes the value unknown
const allTokens: Array<Token> = Object.entries(tokensList).map(([name, value]) => ({
  name,
  value,
}));

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const componentTokens = Object.assign(
  {},
  ...componentCategories.categories.map(category => {
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

const GlobalDesignTokens = () => {
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
      {Object.keys(componentTokens).map(category => {
        const value = componentTokens[category];
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

export default GlobalDesignTokens;
