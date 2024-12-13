import React from "react";
import {
  Heading,
  Portal,
  Modal,
  Grid,
  ModalHeader,
  ModalSection,
  Text,
  Hide,
} from "@kiwicom/orbit-components";
import { Search as SearchIcon, ChevronForward } from "@kiwicom/orbit-components/icons";
import type {
  UseComboboxGetInputPropsOptions,
  UseComboboxGetComboboxPropsOptions,
  UseComboboxGetItemPropsOptions,
  GetPropsCommonOptions,
} from "downshift";

import Input from "./primitives/Input";
import InputContainer from "./primitives/InputContainer";
import Prefix from "./primitives/Prefix";
import Menu from "./primitives/Menu";
import MenuItem from "./primitives/MenuItem";
import MenuItemTitle from "./primitives/MenuItemTitle";
import type { SearchResult } from "./types";
import Tile from "../Tile";
import { ICON_MAP, getIconFromItem } from "../icons/consts";
import { load, update } from "../../utils/storage";

interface Props {
  onClose: () => void;
  title?: React.ReactNode;
  placeholder?: string;
  hasRecentSearches?: boolean;
  hasDescription?: boolean;
  data: SearchResult[];
  onComboboxProps: (
    opts?: UseComboboxGetComboboxPropsOptions,
    otherOpts?: GetPropsCommonOptions,
  ) => Record<string, unknown>;
  onGetItemProps: (opts: UseComboboxGetItemPropsOptions<SearchResult>) => Record<string, unknown>;
  onGetInputProps: (
    opts?: UseComboboxGetInputPropsOptions,
    otherOpts?: GetPropsCommonOptions,
  ) => Record<string, unknown>;
  onGetMenuProps: (
    opts?: UseComboboxGetInputPropsOptions,
    otherOpts?: GetPropsCommonOptions,
  ) => Record<string, unknown>;
}

function getItemName({ item, short = false }: { item: SearchResult; short?: boolean }) {
  const isComponent = item.breadcrumbs && item.breadcrumbs[0] === "Components";
  if (isComponent && item.breadcrumbs) {
    const lastBreadcrumb = item.breadcrumbs[item.breadcrumbs.length - 1];
    if (lastBreadcrumb === "React" || lastBreadcrumb === "Design") {
      return short
        ? item?.breadcrumbs[item.breadcrumbs.length - 2]
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
  hasRecentSearches = true,
  title = "What are you looking for?",
  hasDescription = true,
  onComboboxProps,
  onGetItemProps,
  onGetInputProps,
  onGetMenuProps,
}: Props) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const recentSearches: string[] = React.useMemo(() => {
    return JSON.parse(load("search") || "null") || [];
  }, []);

  const handleComponentTileClick = React.useCallback(
    (item: SearchResult) => {
      update("search", JSON.stringify(item), 4);
      onClose();
    },
    [onClose],
  );

  return (
    <Portal>
      <div className="tablet:[&>*>*]:items-start tablet:[&>*>*>*]:h-auto [&>*>*>*]:h-full [&>div:nth-child(2)]:max-w-[1180px]">
        <Modal size="extraLarge" autoFocus={false} onClose={onClose}>
          <ModalHeader title={title} />
          <ModalSection>
            <div className="mb-4 text-base">
              <InputContainer {...onComboboxProps()}>
                <Prefix>
                  <SearchIcon />
                </Prefix>
                <Input
                  {...onGetInputProps({
                    ref: inputRef,
                    type: "search",
                    placeholder,
                  })}
                />
              </InputContainer>
            </div>
            <div className="relative ml-6">
              <div className="absolute inset-x-0 -top-2">
                {data && data.length > 0 && (
                  <Text as="p">
                    We found <b>{data.length} results</b> matching your search
                  </Text>
                )}
              </div>
            </div>
            {hasRecentSearches && (
              <>
                {data.length === 0 && recentSearches.length > 0 && (
                  <Menu {...onGetMenuProps()} visible={recentSearches.length > 0}>
                    <Heading type="title2" spaceAfter="large">
                      Recent searches
                    </Heading>
                    <Grid
                      columns="repeat(2, 1fr)"
                      largeDesktop={{ columns: "repeat(3, 1fr)" }}
                      gap="1rem"
                    >
                      {recentSearches.map((searchResult, idx) => {
                        const item = JSON.parse(searchResult);
                        const itemName = getItemName({ item, short: true });

                        return (
                          <MenuItem key={item.id} tile {...onGetItemProps({ item, index: idx })}>
                            <Tile
                              title={itemName}
                              linkContent={<ChevronForward size="medium" />}
                              href={item.path}
                              onClick={onClose}
                              icon={getIconFromItem(item)}
                            />
                          </MenuItem>
                        );
                      })}
                    </Grid>
                  </Menu>
                )}
                <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
                  {data.length > 0 && (
                    <Menu {...onGetMenuProps()} visible={data.length > 0}>
                      <Heading type="title2" spaceAfter="large">
                        Components
                      </Heading>
                      <Grid
                        columns="repeat(2, 1fr)"
                        largeDesktop={{ columns: "repeat(3, 1fr)" }}
                        gap="1rem"
                      >
                        {data
                          .filter(({ breadcrumbs }) => breadcrumbs && breadcrumbs.length === 3)
                          .map(item => {
                            const itemName = getItemName({ item, short: true });
                            return (
                              <MenuItem key={item.id} tile {...onGetItemProps({ item })}>
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
                              </MenuItem>
                            );
                          })}
                      </Grid>
                    </Menu>
                  )}
                </Hide>
              </>
            )}
            {data.length > 0 && (
              <Menu {...onGetMenuProps()} visible={data.length > 0}>
                <Heading type="title2" spaceAfter="large">
                  All search results
                </Heading>
                <Grid columns="1fr" largeDesktop={{ columns: "repeat(2, 1fr)" }} gap="1rem">
                  {data.map((item, idx) => {
                    const itemName = getItemName({ item });
                    return (
                      <MenuItem key={item.id} {...onGetItemProps({ item, index: idx })}>
                        <div>
                          <MenuItemTitle>{itemName}</MenuItemTitle>
                          {hasDescription && <div>{item.description}</div>}
                        </div>
                        <ChevronForward size="medium" />
                      </MenuItem>
                    );
                  })}
                </Grid>
              </Menu>
            )}
          </ModalSection>
        </Modal>
      </div>
    </Portal>
  );
}
