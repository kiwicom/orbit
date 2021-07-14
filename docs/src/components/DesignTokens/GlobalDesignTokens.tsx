import * as React from "react";
import tokensList from "@kiwicom/orbit-design-tokens/lib/docs-tokens.json";
import globalCategories from "@kiwicom/orbit-design-tokens/lib/docs-categories.json";
import { Separator, Select, InputField, Stack, Box, Checkbox } from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

import DesignTokensTable from "./components/DesignTokensTable";
import OptionsFilter from "./OptionsFilter";
import { GlobalCategories, Platforms, Token, TypographyCategories } from "./typings";

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

const groupedCategories = globalCategories.categories
  .map(category => {
    if (category in TypographyCategories) {
      return "typography";
    }
    return category;
  })
  .filter((v, i, a) => a.indexOf(v) === i);

const globalTokens = Object.assign(
  {},
  ...groupedCategories.map(category => {
    const categoryTokens = allTokens.filter(
      ({
        value: {
          schema: { namespace, object },
        },
      }) => {
        if (namespace === "global") {
          if (category === "typography" && object in TypographyCategories) {
            return true;
          }
          return object === category;
        }
        return false;
      },
    );
    return { [category]: categoryTokens };
  }),
);

const GlobalDesignTokens = () => {
  const [filter, setFilter] = React.useState<string>("");
  const [showDeprecated, setShowDeprecated] = React.useState<boolean>(false);
  const [platform, setPlatform] = React.useState<keyof typeof Platforms>("javascript");
  const [selectedCategories, setSelectedCategories] = React.useState<Array<string>>([]);

  const handleSelectCategory = name => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(prev => prev.filter(category => category !== name));
      return;
    }
    setSelectedCategories(prev => [...prev, name]);
  };

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
      <Box maxWidth="200px" width="full">
        <Checkbox
          label="Show deprecated tokens"
          checked={showDeprecated}
          onChange={() => {
            setShowDeprecated(prev => !prev);
          }}
        />
      </Box>
      <OptionsFilter
        label="Selected categories"
        value={selectedCategories}
        options={groupedCategories.map(c => ({ key: c, name: GlobalCategories[c] }))}
        onChange={handleSelectCategory}
      />
      <Separator />
      {Object.keys(globalTokens).map(category => {
        const value = globalTokens[category];
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
              showDeprecated={showDeprecated}
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
