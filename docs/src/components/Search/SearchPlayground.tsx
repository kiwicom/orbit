import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { filter } from "fuzzaldrin-plus";
import { useCombobox } from "downshift";
import { debounce, camelCase, upperFirst } from "lodash";

import SearchModalUI from "./SearchModalUI";
import type { LodashDebounceFunc, SearchResult } from "./types";

interface QueryResponse {
  allExample: {
    nodes: Array<{
      example_id: string;
      example: string;
      id: string;
    }>;
  };
}

const SearchPlayground = ({
  onClose,
  onSelect,
}: {
  onClose: () => void;
  onSelect: (code: string) => void;
}) => {
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const debounceUserInput = React.useRef<LodashDebounceFunc | null>(null);

  const data: QueryResponse = useStaticQuery(graphql`
    query AllExamples {
      allExample {
        nodes {
          id
          example
          example_id
        }
      }
    }
  `);

  const examples = React.useMemo(() => {
    return data.allExample.nodes.map(({ example_id, id, example }) => {
      return {
        name: example_id
          .split("-")
          .map(s => upperFirst(camelCase(s)))
          .join(" "),
        id,
        description: example,
      };
    });
  }, [data]);

  const setUserInput = (downshiftInput: { inputValue: string }) => {
    setResults(filter(examples, downshiftInput.inputValue, { key: "name" }));
  };

  if (!debounceUserInput.current) {
    debounceUserInput.current = debounce(setUserInput, 500);
  }

  const { getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox<SearchResult>(
    {
      items: results,
      itemToString: item => (item ? item.name : ""),
      defaultHighlightedIndex: 0,
      onInputValueChange: debounceUserInput.current,
      onSelectedItemChange: async changes => {
        if (changes.selectedItem && changes.selectedItem.name) {
          onSelect(changes.selectedItem.description);
          onClose();
        }
      },
    },
  );

  return (
    <SearchModalUI
      onGetMenuProps={getMenuProps}
      onGetInputProps={getInputProps}
      placeholder="Button"
      title="Search for example"
      onClose={onClose}
      hasDescription={false}
      data={results}
      onComboboxProps={getComboboxProps}
      onGetItemProps={getItemProps}
    />
  );
};

export default SearchPlayground;
