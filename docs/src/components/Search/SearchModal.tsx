import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { filter } from "fuzzaldrin-plus";
import { useCombobox } from "downshift";
import { debounce } from "lodash";
import { useMediaQuery } from "@kiwicom/orbit-components";

import SearchModalUI from "./SearchModalUI";
import { isLoggedIn, isBrowser } from "../../services/auth";
import type { SearchResult, LodashDebounceFunc } from "./types";
import { update } from "../../utils/storage";

interface Props {
  onClose: () => void;
}

interface QueryResponse {
  allMdx: {
    nodes: Array<{
      fields: {
        slug: string;
        id: string;
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

export default function SearchModal({ onClose }: Props) {
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const debounceUserInput = React.useRef<LodashDebounceFunc | null>(null);

  const data: QueryResponse = useStaticQuery(graphql`
    query Documents {
      allMdx(filter: { fileAbsolutePath: { regex: "/documentation/" } }) {
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
    const mdxPages = data.allMdx.nodes.map((node, idx) => {
      const breadcrumbs = node.fields ? node.fields.breadcrumbs.map(({ name }) => name) : [];
      return {
        id: String(idx),
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
                  id: componentName,
                  description: "",
                  name: fullPath.split("/").join(" "),
                  path: `/dashboard/tracking/${repoName}/${componentName.toLowerCase()}/#${propName}`,
                  breadcrumbs: fullPath.split("/"),
                });
              });
            });

            return pages;
          })
        : [];

    const restPages: SearchResult[] = data.allSitePage.nodes.map(node => {
      return {
        id: node.id,
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

  const setUserInput = (downshiftInput: { inputValue: string }) => {
    setResults(filter(documents, downshiftInput.inputValue, { key: "name" }));
  };

  if (!debounceUserInput.current) {
    debounceUserInput.current = debounce(setUserInput, 500);
  }

  const { getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox<SearchResult>(
    {
      items: results,
      itemToString: item => (item && item.breadcrumbs ? item.breadcrumbs.join(" / ") : ""),
      defaultHighlightedIndex: 0,
      onInputValueChange: debounceUserInput.current,
      onSelectedItemChange: async changes => {
        if (changes.selectedItem && changes.selectedItem.path) {
          await navigate(changes.selectedItem.path);
          update("search", JSON.stringify(changes.selectedItem), 4);
          onClose();
        }
      },
    },
  );

  return (
    <SearchModalUI
      onClose={onClose}
      data={results}
      placeholder={placeholder}
      onComboboxProps={getComboboxProps}
      onGetInputProps={getInputProps}
      onGetItemProps={getItemProps}
      onGetMenuProps={getMenuProps}
    />
  );
}
