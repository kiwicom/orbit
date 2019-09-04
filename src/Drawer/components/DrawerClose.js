// @flow
import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink/index";
import ChevronRight from "../../icons/ChevronRight";
import Close from "../../icons/Close";
import TYPES from "../consts";
import type { Props } from "./DrawerClose";

const StyledDrawerNavigationClose = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  background: rgb(245, 247, 249);
  width: 320px;
  padding: 16px 24px;
`;

const DrawerClose = ({ type, onClick }: Props) => {
  if (type === TYPES.NAVIGATION) {
    return (
      <StyledDrawerNavigationClose>
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
