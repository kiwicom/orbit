// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { SIZES, TYPES } from "./consts";
import getSpacingToken from "../common/getSpacingToken";

import type { Props, ListContextType, GetSizeToken } from "./index";

export const ListContext: ListContextType = React.createContext({
  size: null,
  type: null,
});

export const getSizeToken: GetSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZES.LARGE]: theme.orbit.fontSizeTextLarge,
  };
  return sizeTokens[size];
};

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPES.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPES.SECONDARY]: theme.orbit.colorTextSecondary,
  };

  return typeTokens[type];
};

const StyledList = styled(({ className, children, dataTest }) => (
  <ul className={className} data-test={dataTest}>
    {children}
  </ul>
))`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  font-size: ${getSizeToken};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${getTypeToken};
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

StyledList.defaultProps = {
  theme: defaultTheme,
};

const List = ({
  children,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  dataTest,
  spaceAfter,
}: Props) => (
  <StyledList type={type} size={size} dataTest={dataTest} spaceAfter={spaceAfter}>
    <ListContext.Provider value={{ size, type }}>{children}</ListContext.Provider>
  </StyledList>
);

export default List;

export { default as ListItem } from "./ListItem";
