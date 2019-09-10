// @flow
import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink";
import Hide from "../../Hide";
import ChevronRight from "../../icons/ChevronRight";
import Close from "../../icons/Close";
import type { Props } from "./DrawerClose";
import { isNavigation } from "../helpers/isType";
import defaultTheme from "../../defaultTheme";
import Translate, { pureTranslate } from "../../Translate";
import useDictionary from "../../hooks/useDictionary";

const StyledDrawerNavigationClose = styled(({ type, theme, ...props }) => <div {...props} />)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme, type }) => isNavigation(type) && theme.orbit.paletteCloudLight};
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge}`};
  height: 64px;
`;

StyledDrawerNavigationClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = ({ type, onClick }: Props) => {
  const dictionary = useDictionary();
  if (isNavigation(type)) {
    return (
      <StyledDrawerNavigationClose type={type}>
        <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
          <ButtonLink
            iconRight={<ChevronRight reverseOnRtl />}
            size="small"
            type="secondary"
            onClick={onClick}
          >
            <Translate tKey="drawer_hide" />
          </ButtonLink>
        </Hide>
        <Hide on={["tablet", "desktop", "largeDesktop"]}>
          <ButtonLink
            iconRight={<ChevronRight reverseOnRtl />}
            size="normal"
            type="secondary"
            onClick={onClick}
          >
            <Translate tKey="drawer_hide" />
          </ButtonLink>
        </Hide>
      </StyledDrawerNavigationClose>
    );
  }
  return (
    <StyledDrawerNavigationClose type={type}>
      <ButtonLink
        onClick={onClick}
        iconLeft={<Close />}
        type="secondary"
        title={pureTranslate(dictionary, "drawer_hide")}
      />
    </StyledDrawerNavigationClose>
  );
};

export default DrawerClose;
