import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import defaultTheme from "../../defaultTheme";
import { left } from "../../utils/rtl";
import type { Props } from "./types";

const StyledDrawerClose = styled.div`
  margin-${left}: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledDrawerClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = React.forwardRef<HTMLButtonElement, Props>(({ onClick, title }, ref) => {
  return (
    <StyledDrawerClose>
      <ButtonLink onClick={onClick} iconLeft={<Close />} ref={ref} type="secondary" title={title} />
    </StyledDrawerClose>
  );
});

export default DrawerClose;
