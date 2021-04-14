import React from "react";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import capitalize from "capitalize";
import { filter } from "fuzzaldrin-plus";
import { useCombobox } from "downshift";
import {
  Portal,
  Modal,
  ModalHeader,
  ModalSection,
  Text,
  mediaQueries,
  useMediaQuery,
} from "@kiwicom/orbit-components";
import { Search as SearchIcon, ChevronRight } from "@kiwicom/orbit-components/icons";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import StyledWrapper from "./primitives/StyledWrapper";
import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPrefix from "./primitives/StyledPrefix";
import StyledInput from "./primitives/StyledInput";
import { StyledMenu, StyledMenuItem, StyledMenuItemTitle } from "./primitives/StyledMenu";

interface Props {
  placeholder: string;
  onClose: () => void;
}

interface QueryResponse {
  allMdx: {
    nodes: Array<{
      fields: {
        slug: string;
      };
      frontmatter: {
        description: string;
      };
    }>;
  };
}

interface SearchResult {
  name: string;
  breadcrumbs: string[];
  description: string;
  path: string;
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
  const data: QueryResponse = useStaticQuery(graphql`
    query Documents {
      allMdx(filter: { fileAbsolutePath: { regex: "/documentation/" } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            description
          }
        }
      }
    }
  `);
  const documents = React.useMemo<SearchResult[]>(
    () =>
      data.allMdx.nodes.map(node => {
        const breadcrumbs = node.fields.slug
          .split("/")
          .filter(Boolean)
          .map(part => {
            if (part === "code-kiwi-com") return "code.kiwi.com";
            return capitalize(part.replace(/-/g, " "));
          });
        return {
          name: breadcrumbs.join(" "),
          breadcrumbs,
          description: node.frontmatter.description,
          path: node.fields.slug,
        };
      }),
    [data],
  );

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

  function getItemTitle(item: SearchResult): string {
    return item.breadcrumbs.join(" / ");
  }

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox({
    items: results,
    itemToString: item => (item ? getItemTitle(item) : ""),
    defaultHighlightedIndex: 0,
    onInputValueChange: changes => {
      setResults(filter(documents, changes.inputValue, { key: "name" }));
    },
    onSelectedItemChange: changes => {
      if (changes.selectedItem) {
        navigate(changes.selectedItem.path);
        onClose();
      }
    },
  });

  // autofocus
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
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
          <ModalHeader title="What are you looking for?" />
          <ModalSection>
            <StyledSearchWrapper>
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
            <div
              css={css`
                position: relative;
                margin-left: 1.5rem;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -0.5rem;
                  right: 0;
                  left: 0;
                `}
              >
                {isOpen && (
                  <Text as="p" size="large">
                    We found <b>{results.length} generic results</b> matching your results
                  </Text>
                )}
              </div>
            </div>
            <StyledMenu {...getMenuProps()} hasResults={isOpen && results.length > 0}>
              {isOpen && (
                <>
                  {results.map((item, itemIndex) => (
                    <StyledMenuItem key={item.path} {...getItemProps({ item, index: itemIndex })}>
                      <div>
                        <StyledMenuItemTitle>{getItemTitle(item)}</StyledMenuItemTitle>
                        <Text size="large">{item.description}</Text>
                      </div>
                      <ChevronRight size="large" />
                    </StyledMenuItem>
                  ))}
                </>
              )}
            </StyledMenu>
          </ModalSection>
        </Modal>
      </StyledModalWrapper>
    </Portal>
  );
}
