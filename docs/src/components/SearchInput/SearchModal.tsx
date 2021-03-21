import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { Index } from "elasticlunr";
import { useCombobox } from "downshift";
import {
  Portal,
  Modal,
  ModalSection,
  mediaQueries,
  useMediaQuery,
} from "@kiwicom/orbit-components";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import StyledWrapper, { Size } from "./primitives/StyledWrapper";
import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPrefix from "./primitives/StyledPrefix";
import StyledInput from "./primitives/StyledInput";
import { StyledDropdown, StyledDropdownItem } from "./primitives/StyledDropdown";
import useSearchIndex from "../../hooks/useSearchIndex";

export interface SearchResult {
  id: string;
  breadcrumbs: string[];
  description: string;
  path: string;
}

interface Props {
  placeholder: string;
  onClose: () => void;
}

const StyledModalWrapper = styled.div`
  /* align modal to the top */
  ${mediaQueries.largeMobile(css`
    > * > * {
      align-items: flex-start;
    }
  `)}
`;
const StyledSearchWrapper = styled(StyledWrapper)`
  max-width: none;
  margin-bottom: 1rem;
  font-size: 1rem;
`;
const StyledSearchInput = styled(StyledInput)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function SearchModal({ placeholder, onClose }: Props) {
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const { index } = useSearchIndex();
  // the index will not update in production
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const indexed = React.useMemo<typeof index>(() => Index.load(index), []);
  const handleSearch = (val: string) => {
    setResults(
      indexed.search(val, { expand: true }).map(doc => indexed.documentStore.getDoc(doc.ref)),
    );
  };

  const scrollingElementRef = React.useRef<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    if (scrollingElementRef.current) {
      disableBodyScroll(scrollingElementRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const { isLargeMobile } = useMediaQuery();

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

  // autofocus
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Portal>
      <StyledModalWrapper>
        <Modal
          // the search field will be autofocused
          autoFocus={false}
          scrollingElementRef={scrollingElementRef}
          // to get round corners on larger viewports
          isMobileFullPage={!isLargeMobile}
          onClose={onClose}
        >
          <ModalSection>
            <StyledSearchWrapper size={Size.Regular}>
              <StyledInputContainer {...getComboboxProps()}>
                <StyledPrefix>
                  <SearchIcon />
                </StyledPrefix>
                <StyledSearchInput
                  {...getInputProps({
                    ref: inputRef,
                    type: "search",
                    placeholder,
                  })}
                />
              </StyledInputContainer>
            </StyledSearchWrapper>
            <StyledDropdown {...getMenuProps()} visible={results.length > 0}>
              {isOpen && (
                <>
                  {results.length > 0 ? (
                    results.map(item => {
                      const { breadcrumbs, id, path } = item;
                      return (
                        <StyledDropdownItem key={id} {...getItemProps({ item })}>
                          <Link to={path}>{breadcrumbs.join(" / ")}</Link>
                        </StyledDropdownItem>
                      );
                    })
                  ) : (
                    <StyledDropdownItem type="disabled">No results</StyledDropdownItem>
                  )}
                </>
              )}
            </StyledDropdown>
          </ModalSection>
        </Modal>
      </StyledModalWrapper>
    </Portal>
  );
}
