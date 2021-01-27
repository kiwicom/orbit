import * as React from "react";
import SearchIcon from "@kiwicom/orbit-components/lib/icons/Search";
import { Event } from "@kiwicom/orbit-components/lib/common/common";
import { Index } from "elasticlunr";
import { Link } from "gatsby";
import { useCombobox } from "downshift";

import useSearchIndex from "../../hooks/useSearchIndex";
import StyledWrapper from "./primitives/StyledWrapper";
import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPreffix from "./primitives/StyledPrefix";
import StyledInput from "./primitives/StyledInput";
import { StyledDropdown, StyledDropdownItem } from "./primitives/StyledDropdown";

type InputEvent = Event<React.SyntheticEvent<HTMLInputElement>>;
type KeyboardEvent = Event<React.KeyboardEvent<HTMLInputElement>>;

interface SearchResult {
  id: string;
  excerpt: string;
  title: string;
  path: string;
}

interface Props {
  placeholder?: string;
  onFocus?: InputEvent;
  onChange?: (value: string) => (data: SearchResult[]) => void | Promise<void>;
  onBlur?: InputEvent;
  onKeyUp?: KeyboardEvent;
  onKeyDown?: KeyboardEvent;
  name?: string;
  disabled?: boolean;
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(function SearchInput(
  {
    placeholder = "Search for components, foundation...",
    disabled,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
    name,
  },
  ref,
) {
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const { index } = useSearchIndex();

  const handleSearch = (val: string) => {
    const indexed = Index.load(index);
    setResults(
      indexed.search(val, { expand: true }).map(doc => indexed.documentStore.getDoc(doc.ref)),
    );
    if (onChange) onChange(val)(results);
  };

  const {
    isOpen,
    getMenuProps,
    inputValue,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: results,
    onInputValueChange: () => handleSearch(inputValue),
  });

  return (
    <StyledWrapper>
      <div {...getComboboxProps()}>
        <StyledInputContainer>
          <StyledPreffix>
            <SearchIcon />
          </StyledPreffix>
          <StyledInput
            ref={ref}
            {...getInputProps({
              type: "search",
              name,
              value,
              placeholder,
              disabled,
              onKeyDown,
              onKeyUp,
              onFocus,
              onBlur,
            })}
          />
        </StyledInputContainer>
      </div>
      <StyledDropdown {...getMenuProps()} visible={results.length > 0}>
        {isOpen &&
          results.length > 0 &&
          results.map(item => {
            const { title, id, path } = item;
            return (
              <StyledDropdownItem key={id} {...getItemProps({ item })}>
                <Link to={path}>{title}</Link>
              </StyledDropdownItem>
            );
          })}
      </StyledDropdown>
    </StyledWrapper>
  );
});

export default Input;
