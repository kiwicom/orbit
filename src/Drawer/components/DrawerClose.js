// @flow
import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./DrawerClose";
import defaultTheme from "../../defaultTheme";
import { left } from "../../utils/rtl";
import useTranslate from "../../hooks/useTranslate";

const StyledDrawerClose = styled.div`
  margin-${left}: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledDrawerClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = ({ onClick }: Props) => {
  const translate = useTranslate();
  return (
    <StyledDrawerClose>
      <ButtonLink
        onClick={onClick}
        iconLeft={<Close />}
        type="secondary"
        title={translate("drawer_hide")}
        transparent
      />
    </StyledDrawerClose>
  );
};

export default DrawerClose;
