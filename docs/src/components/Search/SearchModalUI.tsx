import React from "react";
import styled, { css } from "styled-components";
import {
  Heading,
  Portal,
  Modal,
  ModalHeader,
  ModalSection,
  Text,
  mediaQueries,
  Hide,
} from "@kiwicom/orbit-components";
import { Search as SearchIcon, ChevronForward } from "@kiwicom/orbit-components/icons";
import type {
  UseComboboxGetInputPropsOptions,
  UseComboboxGetComboboxPropsOptions,
  UseComboboxGetItemPropsOptions,
  GetPropsCommonOptions,
} from "downshift";

import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPrefix from "./primitives/StyledPrefix";
import StyledInput from "./primitives/StyledInput";
import {
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemTitle,
  StyledSearchResultsGrid,
} from "./primitives/StyledMenu";
import type { SearchResult } from "./types";
import Tile from "../Tile";
import { ICON_MAP, getIconFromItem } from "../icons/consts";
import { load, update } from "../../utils/storage";

interface Props {
  onClose: () => void;
  title?: React.ReactNode;
  placeholder?: string;
  hasDescription?: boolean;
  data: SearchResult[];
  onComboboxProps: (
    opts?: UseComboboxGetComboboxPropsOptions,
    otherOpts?: GetPropsCommonOptions,
  ) => any;
  onGetItemProps: (opts: UseComboboxGetItemPropsOptions<SearchResult>) => any;
  onGetInputProps: <T>(
    opts?: UseComboboxGetInputPropsOptions,
    otherOpts?: GetPropsCommonOptions,
  ) => T;
  onGetMenuProps: (
    opts?: UseComboboxGetInputPropsOptions,
    otherOpts?: GetPropsCommonOptions,
  ) => any;
}

export const StyledModalWrapper = styled.div`
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

function getItemName({ item, short = false }: { item: SearchResult; short?: boolean }) {
  const isComponent = (item.breadcrumbs && item.breadcrumbs[0] === "Components") || false;
  if (isComponent && item.breadcrumbs) {
    const lastBreadcrumb = item.breadcrumbs[item.breadcrumbs.length - 1];
    if (lastBreadcrumb === "React" || lastBreadcrumb === "Design") {
      return short
        ? item.breadcrumbs[item.breadcrumbs.length - 2]
        : item.breadcrumbs.slice(item.breadcrumbs.length - 2).join(" / ");
    }
    return lastBreadcrumb;
  }
  return item.breadcrumbs ? item.breadcrumbs[item.breadcrumbs.length - 1] : item.name;
}

export default function SearchModalUI({
  onClose,
  placeholder = "Search...",
  data,
  title = "What are you looking for?",
  hasDescription = true,
  onComboboxProps,
  onGetItemProps,
  onGetInputProps,
  onGetMenuProps,
}: Props) {
  // autofocus
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const recentSearches: string[] = React.useMemo(() => {
    return JSON.parse(load("search") || "null") || [];
  }, []);

  const filterComponents = React.useMemo(() => {
    return data.filter(item => {
      return (
        item.breadcrumbs &&
        item.breadcrumbs[0] === "Components" &&
        item.breadcrumbs[item.breadcrumbs.length - 1] !== "React"
      );
    });
  }, [data]);

  const handleComponentTileClick = React.useCallback(
    (item: SearchResult) => {
      update("search", JSON.stringify(item), 4);
      onClose();
    },
    [onClose],
  );

  return (
    <Portal>
      <StyledModalWrapper>
        <Modal
          // the search field will be auto focused
          autoFocus={false}
          onClose={onClose}
        >
          <ModalHeader title={title} />
          <ModalSection>
            <StyledSearchWrapper>
              <StyledInputContainer {...onComboboxProps()}>
                <StyledPrefix>
                  <SearchIcon />
                </StyledPrefix>
                <StyledInput
                  {...onGetInputProps({
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
                {data && data.length > 0 && (
                  <Text as="p">
                    We found <b>{data.length} results</b> matching your search
                  </Text>
                )}
              </div>
            </div>
            {data.length === 0 && recentSearches.length > 0 && (
              <StyledMenu {...onGetMenuProps()} hasResults={recentSearches.length > 0}>
                <Heading type="title2" spaceAfter="large">
                  Recent searches
                </Heading>
                <StyledSearchResultsGrid>
                  {recentSearches.map((searchResult, idx) => {
                    const item = JSON.parse(searchResult);
                    const itemName = getItemName({ item, short: true });

                    return (
                      <StyledMenuItem key={item.id} tile {...onGetItemProps({ item, index: idx })}>
                        <div>
                          <Tile
                            title={itemName}
                            linkContent={<ChevronForward size="medium" />}
                            href={item.path}
                            onClick={onClose}
                            icon={getIconFromItem(item)}
                          />
                        </div>
                      </StyledMenuItem>
                    );
                  })}
                </StyledSearchResultsGrid>
              </StyledMenu>
            )}
            <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
              {data.length > 0 && filterComponents.length > 0 && (
                <StyledMenu {...onGetMenuProps()} hasResults={filterComponents.length > 0}>
                  <Heading type="title2" spaceAfter="large">
                    Components
                  </Heading>
                  <StyledSearchResultsGrid>
                    {filterComponents.map(item => {
                      const itemName = getItemName({ item, short: true });
                      return (
                        <StyledMenuItem key={item.id} tile {...onGetItemProps({ item })}>
                          <div>
                            <Tile
                              title={itemName}
                              linkContent={<ChevronForward size="medium" />}
                              href={item.path}
                              onClick={() => handleComponentTileClick(item)}
                              icon={ICON_MAP.Components}
                              inline
                            >
                              {item.description && <div>{item.description}</div>}
                            </Tile>
                          </div>
                        </StyledMenuItem>
                      );
                    })}
                  </StyledSearchResultsGrid>
                </StyledMenu>
              )}
            </Hide>
            {data.length > 0 && (
              <StyledMenu {...onGetMenuProps()} hasResults={data.length > 0}>
                <Heading type="title2" spaceAfter="large">
                  All search results
                </Heading>
                {data.map((item, idx) => {
                  const itemName = getItemName({ item });
                  return (
                    <StyledMenuItem key={item.id} {...onGetItemProps({ item, index: idx })}>
                      <div>
                        <StyledMenuItemTitle>{itemName}</StyledMenuItemTitle>
                        {hasDescription && <div>{item.description}</div>}
                      </div>
                      <ChevronForward size="medium" />
                    </StyledMenuItem>
                  );
                })}
              </StyledMenu>
            )}
          </ModalSection>
        </Modal>
      </StyledModalWrapper>
    </Portal>
  );
}
