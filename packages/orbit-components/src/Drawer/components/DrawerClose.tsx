import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import { Props } from "./types";
import defaultTheme from "../../defaultTheme";
import { left } from "../../utils/rtl";
import useTranslate from "../../hooks/useTranslate";

const StyledDrawerClose = styled.div`
  margin-${left}: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledDrawerClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = React.forwardRef<HTMLButtonElement, Props>(({ onClick }, ref) => {
  const translate = useTranslate();

  return (
    <StyledDrawerClose>
      <ButtonLink
        onClick={onClick}
        iconLeft={<Close />}
        ref={ref}
        type="secondary"
        title={translate("drawer_hide")}
      />
    </StyledDrawerClose>
  );
});

export default DrawerClose;
