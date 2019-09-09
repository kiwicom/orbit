// @flow
import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink/index";
import ChevronRight from "../../icons/ChevronRight";
import Close from "../../icons/Close";
import type { Props } from "./DrawerClose";
import { isNavigation } from "../helpers/isType";
import defaultTheme from "../../defaultTheme";

const StyledDrawerNavigationClose = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme, type }) => isNavigation(type) && theme.orbit.paletteCloudLight};
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge}`};
`;

StyledDrawerNavigationClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = ({ type, onClick }: Props) => {
  if (isNavigation(type)) {
    return (
      <StyledDrawerNavigationClose type={type}>
        <ButtonLink iconRight={<ChevronRight reverseOnRtl />} size="small" onClick={onClick}>
          Hide
        </ButtonLink>
      </StyledDrawerNavigationClose>
    );
  }
  return (
    <StyledDrawerNavigationClose type={type}>
      <ButtonLink onClick={onClick} icon={<Close />} type="secondary" />
    </StyledDrawerNavigationClose>
  );
};

export default DrawerClose;
