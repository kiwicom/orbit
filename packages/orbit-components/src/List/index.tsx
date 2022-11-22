import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../common/types";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import { SIZES, TYPES } from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import { getLineHeightToken } from "./ListItem";
import ListContext from "./ListContext";
import type { Type, Props } from "./types";

const getSizeToken = ({ theme, size }: { theme: Theme; size?: Common.Size }): string | null => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZES.LARGE]: theme.orbit.fontSizeTextLarge,
  };

  if (!size) return null;

  return sizeTokens[size];
};

const getTypeToken = ({ theme, type }: { theme: Theme; type?: Type }): string | null => {
  const typeTokens = {
    [TYPES.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPES.SECONDARY]: theme.orbit.colorTextSecondary,
  };

  if (!type) return null;

  return typeTokens[type];
};

const StyledList = styled.ul<{
  size?: Common.Size | null;
  type?: Type | null;
  spaceAfter?: Common.SpaceAfterSizes;
}>`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    font-family: ${theme.orbit.fontFamily};
    font-size: ${getSizeToken};
    line-height: ${getLineHeightToken};
    color: ${getTypeToken};
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: ${getSpacingToken};
  `};
`;

StyledList.defaultProps = {
  theme: defaultTheme,
};

const List = ({
  children,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  dataTest,
  id,
  spaceAfter,
}: Props) => (
  <StyledList type={type} size={size} data-test={dataTest} id={id} spaceAfter={spaceAfter}>
    <ListContext.Provider value={{ size, type }}>{children}</ListContext.Provider>
  </StyledList>
);

export default List;

export { default as ListItem } from "./ListItem";
