import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../../../common/types";
import { StyledText } from "../../../Text";
import defaultTheme from "../../../defaultTheme";
import Button from "../../../Button";
import { StyledTextLink } from "../../../TextLink";
import transition from "../../../utils/transition";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import useLockScrolling from "../../../hooks/useLockScrolling";

interface Props extends Common.Globals {
  shown: boolean;
  lockScrolling?: boolean;
  dialogId: string;
  labelClose: React.ReactNode;
  children: React.ReactNode;
  onClose: (ev: React.SyntheticEvent<HTMLElement>) => void;
}

const StyledDialog = styled.div`
  width: 100%;
`;

const StyledDialogWrapper = styled.div<{ shown?: boolean }>`
  position: fixed;
  width: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.orbit.paletteInkDark};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaisedReverse};
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: ${({ theme, shown }) =>
    css`
      ${transition(["transform"], "normal", "ease-in-out")},
      ${transition(["visibility"], "fast", "linear")},
        ${!shown && theme.orbit.durationNormal}
    `};
  z-index: 10012;
  transform: ${({ shown }) => (!shown ? "translateY(calc(100% + 16px))" : "translateY(0)")};
  bottom: ${({ theme }) => theme.orbit.spaceMedium};
  left: ${({ theme }) => theme.orbit.spaceMedium};
  right: ${({ theme }) => theme.orbit.spaceMedium};
  max-height: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  overflow-y: scroll;

  img {
    max-width: 100%;
  }
`;

StyledDialogWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  color: ${({ theme }) => theme.orbit.paletteWhite};
  margin-bottom: ${({ theme }) => theme.orbit.spaceMedium};

  & ${StyledText}, .orbit-list-item {
    font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }

  & ${StyledTextLink} {
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }
`;

StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledDialogOverlay = styled.div<{ shown?: boolean }>`
  position: fixed;
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(23, 27, 30, 0.6);
  z-index: 10011;
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: ${({ theme, shown }) => css`
    ${transition(["opacity"], "normal", "ease-in-out")},
    ${transition(["visibility"], "fast", "linear")},
    ${!shown && theme.orbit.durationNormal}
  `};
`;

StyledDialogOverlay.defaultProps = {
  theme: defaultTheme,
};

const DialogContent = ({
  dataTest,
  shown,
  lockScrolling = true,
  labelClose,
  dialogId,
  children,
  onClose,
}: Props) => {
  const overlay = React.useRef(null);
  const dialog = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(dialog, lockScrolling);
  const handleClickOutside = React.useCallback(
    ev => {
      ev.stopPropagation();
      if (ev.target === overlay.current) {
        onClose(ev);
      }
    },
    [onClose],
  );
  const handleInnerClick = React.useCallback(
    ev => {
      if (dialog.current) {
        const focusableElements = dialog.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose(ev);
        }
      }
    },
    [onClose],
  );
  return (
    <StyledDialog role="dialog" id={dialogId} data-test={dataTest}>
      <StyledDialogOverlay shown={shown} ref={overlay} onClick={handleClickOutside} />
      <StyledDialogWrapper
        shown={shown}
        ref={dialog}
        role="tooltip"
        aria-hidden={!shown}
        onClick={handleInnerClick}
      >
        <StyledTooltipContent>{children}</StyledTooltipContent>
        <Button type="secondary" fullWidth onClick={onClose}>
          {labelClose}
        </Button>
      </StyledDialogWrapper>
    </StyledDialog>
  );
};

export default DialogContent;
