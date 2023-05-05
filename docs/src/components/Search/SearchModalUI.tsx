import React from "react";
import styled, { css } from "styled-components";
import {
  Portal,
  Modal,
  ModalHeader,
  ModalSection,
  Text,
  mediaQueries,
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
import { StyledMenu, StyledMenuItem, StyledMenuItemTitle } from "./primitives/StyledMenu";
import type { SearchResult } from "./types";

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
            <StyledMenu {...onGetMenuProps()} hasResults={data.length > 0}>
              {data.map((item, idx) => (
                <StyledMenuItem key={item.id} {...onGetItemProps({ item, index: idx })}>
                  <div>
                    <StyledMenuItemTitle>{item.name.split(" ").join(" / ")}</StyledMenuItemTitle>
                    {hasDescription && <div>{item.description}</div>}
                  </div>
                  <ChevronForward size="medium" />
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </ModalSection>
        </Modal>
      </StyledModalWrapper>
    </Portal>
  );
}
