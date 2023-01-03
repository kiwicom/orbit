import React from "react";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { filter } from "fuzzaldrin-plus";
import { useCombobox } from "downshift";
import type { DebouncedFunc } from "lodash";
import { debounce } from "lodash";
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

import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPrefix from "./primitives/StyledPrefix";
import StyledInput from "./primitives/StyledInput";
import { StyledMenu, StyledMenuItem, StyledMenuItemTitle } from "./primitives/StyledMenu";
import { isLoggedIn, isBrowser } from "../../services/auth";

interface Props {
  onClose: () => void;
}

type LodashDebounceFunc = DebouncedFunc<(downshiftInput: { inputValue?: string }) => void>;

interface QueryResponse {
  allMdx: {
    nodes: Array<{
      fields: {
        slug: string;
        breadcrumbs: Array<{
          name: string;
        }>;
      };
      frontmatter: {
        title: string;
        description: string;
      };
    }>;
  };
  allSitePage: {
    nodes: Array<{ id: string; path: string }>;
  };
  allTracking: {
    nodes: Array<{
      id: string;
      name: string;
      trackedData: Array<{ name: string; props: Array<{ name: string; used: number }> }>;
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
  > * > * > * {
    height: 100%;
  }
  ${mediaQueries.largeMobile(css`
    > * > * {
      align-items: flex-start;
    }
    > * > * > * {
      height: auto;
    }
  `)}
`;
const StyledSearchWrapper = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export default function SearchModal({ onClose }: Props) {
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const debounceUserInput = React.useRef<LodashDebounceFunc | null>(null);

  const data: QueryResponse = useStaticQuery(graphql`
    query Documents {
      allMdx(filter: { internal: { contentFilePath: { regex: "/documentation/" } } }) {
        nodes {
          fields {
            slug
            breadcrumbs {
              name
            }
          }
          frontmatter {
            title
            description
          }
        }
      }
      allTracking {
        nodes {
          id
          name
          trackedData {
            name
            props {
              name
              used
            }
          }
        }
      }
      allSitePage(
        filter: {
          path: {
            in: ["/changelog/", "/roadmap/", "/dashboard/", "/component-status/", "/components"]
          }
        }
      ) {
        nodes {
          id
          path
        }
      }
    }
  `);

  const documents = React.useMemo<SearchResult[]>(() => {
    const mdxPages = data.allMdx.nodes.map(node => {
      const breadcrumbs = node.fields ? node.fields.breadcrumbs.map(({ name }) => name) : [];
      return {
        name: breadcrumbs.join(" "),
        breadcrumbs,
        description: node.frontmatter.description,
        path: node.fields.slug,
      };
    });

    const trackingPages =
      isLoggedIn() && isBrowser && window.location.pathname.includes("dashboard")
        ? data.allTracking.nodes.map(({ name: repoName, trackedData }) => {
            const pages: SearchResult[] = [];

            trackedData.forEach(({ name: componentName, props }) => {
              props.forEach(({ name: propName }) => {
                const fullPath = `${repoName}/${componentName.toLowerCase()}/${propName}`;

                pages.push({
                  name: fullPath.split("/").join(" "),
                  path: `/dashboard/tracking/${repoName}/${componentName.toLowerCase()}/#${propName}`,
                  breadcrumbs: fullPath.split("/"),
                  description: "",
                });
              });
            });

            return pages;
          })
        : [];

    const restPages = data.allSitePage.nodes.map(node => {
      return {
        name: node.path.split("/")[1],
        description: "",
        breadcrumbs: [node.path],
        path: node.path,
      };
    });

    return [...mdxPages, ...restPages].concat(...trackingPages);
  }, [data]);

  const { isTablet } = useMediaQuery();
  // so it doesn't cause horizontal overflow
  const placeholder = isTablet ? "Search…" : "Search for components, foundation…";

  function getItemTitle(item: SearchResult): string {
    return item.breadcrumbs.join(" / ");
  }

  const setUserInput = (downshiftInput: { inputValue: string }) => {
    setResults(filter(documents, downshiftInput.inputValue, { key: "name" }));
  };

  if (!debounceUserInput.current) {
    debounceUserInput.current = debounce(setUserInput, 500);
  }

  const { getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox<SearchResult>(
    {
      items: results,
      itemToString: item => (item ? getItemTitle(item) : ""),
      defaultHighlightedIndex: 0,
      onInputValueChange: debounceUserInput.current,
      onSelectedItemChange: async changes => {
        if (changes.selectedItem) {
          await navigate(changes.selectedItem.path);
          onClose();
        }
      },
    },
  );

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
          onClose={onClose}
        >
          <ModalHeader title="What are you looking for?" />
          <ModalSection>
            <StyledSearchWrapper>
              <StyledInputContainer {...getComboboxProps()}>
                <StyledPrefix>
                  <SearchIcon />
                </StyledPrefix>

                <StyledInput
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
                {results.length > 0 && (
                  <Text as="p">
                    We found <b>{results.length} results</b> matching your search
                  </Text>
                )}
              </div>
            </div>
            <StyledMenu {...getMenuProps()} hasResults={results.length > 0}>
              {results.map((item, itemIndex) => (
                <StyledMenuItem key={item.path} {...getItemProps({ item, index: itemIndex })}>
                  <div>
                    <StyledMenuItemTitle>{getItemTitle(item)}</StyledMenuItemTitle>
                    <div>{item.description}</div>
                  </div>
                  <ChevronRight size="medium" />
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </ModalSection>
        </Modal>
      </StyledModalWrapper>
    </Portal>
  );
}
