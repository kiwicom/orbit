import * as React from "react";
import styled, { css } from "styled-components";
import { Portal, Drawer, mediaQueries as mq } from "@kiwicom/orbit-components";
import { MenuHamburger as Menu } from "@kiwicom/orbit-components/icons";

import { CONTENT_PADDING } from "../../consts";

export const StyledOpenButton = styled.button.attrs(({ className }) => ({
  className,
  "aria-label": "open",
  type: "button",
}))`
  border-radius: 3px;
  display: flex;
  &:focus {
    outline: 0;
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }

  ${mq.tablet(css`
    padding: 1rem;
    margin: -1rem;
    margin-right: calc(${CONTENT_PADDING} / 2);
  `)}
`;

interface Props {
  width?: string;
  actions?: React.ReactNode;
  toggleIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Sidenav = ({ width = "350px", children, toggleIcon, actions }: Props) => {
  const [isShown, setShown] = React.useState(false);

  return (
    <>
      <StyledOpenButton onClick={() => setShown(true)}>
        {toggleIcon || <Menu ariaHidden />}
      </StyledOpenButton>
      <Portal>
        <Drawer shown={isShown} width={width} actions={actions} onClose={() => setShown(false)}>
          {children}
        </Drawer>
      </Portal>
    </>
  );
};

export default Sidenav;
