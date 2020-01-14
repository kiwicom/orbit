// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Portal from "../Portal";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import Heading from "../Heading";
import Text from "../Text";
import Stack from "../Stack";
import mq from "../utils/mediaQuery";
import { StyledButton } from "../Button";
import KEY_CODE_MAP from "../common/keyMaps";
import randomID from "../utils/randomID";

import type { Props } from ".";

const StyledDialog = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.orbit.zIndexModalOverlay};
  box-sizing: border-box;
  outline: none;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${mq.largeMobile(css`
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `)};
`;

StyledDialog.defaultProps = {
  theme: defaultTheme,
};

const StyledDialogContent = styled.div`
  display: block;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: 9px 9px 0 0;
  bottom: ${({ shown }) => (shown ? "0" : "-100%")};
  transition: bottom ${({ theme }) => theme.orbit.durationFast} linear;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowOverlay};
  ${mq.largeMobile(css`
    bottom: auto;
    max-width: ${({ theme }) => theme.orbit.widthModalSmall};
    border-radius: 9px;
    padding: ${({ theme }) => theme.orbit.spaceLarge};
  `)};
`;

StyledDialogContent.defaultProps = {
  theme: defaultTheme,
};

const StyledAction = styled(({ width, theme, ...props }) => <div {...props} />)`
  width: calc(100% * ${({ width }) => width});
  ${StyledButton} {
    width: 100%;
    flex: 1 1 auto;
  }
  ${mq.largeMobile(
    css`
      width: auto;
      ${StyledButton} {
        width: auto;
        flex: 0 0 auto;
      }
    `,
  )};
`;

StyledAction.defaultProps = {
  theme: defaultTheme,
};

const getButtonWidth = width => Math.floor(width * 100);

const Dialog = ({
  dataTest,
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
}: Props) => {
  const ref = React.useRef(null);
  const theme = useTheme();
  const transitionLength = React.useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShown(true);
      if (ref.current) {
        ref.current.focus();
      }
    }, transitionLength);
    return () => clearTimeout(timer);
  }, [transitionLength]);

  const handleClose = ev => {
    if (ref.current && onClose) {
      if (ref.current && !ref.current.contains(ev.target)) onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = ev => {
      if (ev.keyCode === KEY_CODE_MAP.ESC && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const dialogID = React.useMemo(() => randomID("dialog"), []);

  return (
    <Portal renderInto="modals">
      <StyledDialog
        data-test={dataTest}
        shown={shown}
        onClick={handleClose}
        tabIndex="0"
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogID}
      >
        <StyledDialogContent shown={shown} ref={ref} id={dialogID}>
          <Stack spacing="tight" spaceAfter="medium">
            {title && <Heading type="title3">{title}</Heading>}
            {description && <Text type="secondary">{description}</Text>}
          </Stack>
          <Stack direction="row" largeMobile={{ justify: "end" }}>
            {secondaryAction && (
              <StyledAction width={getButtonWidth(1 / 3)}>{secondaryAction}</StyledAction>
            )}
            <StyledAction width={getButtonWidth(2 / 3)}>{primaryAction}</StyledAction>
          </Stack>
        </StyledDialogContent>
      </StyledDialog>
    </Portal>
  );
};

export default Dialog;
