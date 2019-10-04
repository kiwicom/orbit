// @flow
import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./DrawerClose";
import { pureTranslate } from "../../Translate";
import useDictionary from "../../hooks/useDictionary";
import defaultTheme from "../../defaultTheme";
import { left } from "../../utils/rtl";

const StyledDrawerClose = styled.div`
  margin-${left}: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledDrawerClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = ({ onClick }: Props) => {
  const dictionary = useDictionary();
  return (
    <StyledDrawerClose>
      <ButtonLink
        onClick={onClick}
        iconLeft={<Close />}
        type="secondary"
        title={pureTranslate(dictionary, "drawer_hide")}
      />
    </StyledDrawerClose>
  );
};

export default DrawerClose;
