import * as React from "react";
import styled, { css } from "styled-components";

import useFocusTrap from "../hooks/useFocusTrap";
import Portal from "../Portal";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import Heading from "../Heading";
import Text, { StyledText } from "../Text";
import Stack from "../Stack";
import useLockScrolling from "../hooks/useLockScrolling";
import mq from "../utils/mediaQuery";
import { StyledButtonPrimitive } from "../primitives/ButtonPrimitive";
import KEY_CODE_MAP from "../common/keyMaps";
import useRandomId from "../hooks/useRandomId";
import { left } from "../utils/rtl";
import { Props } from "./types";

const StyledDialog = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: ${theme.orbit.spaceMedium};
    z-index: ${theme.orbit.zIndexModalOverlay};
    box-sizing: border-box;
    outline: none;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity ${theme.orbit.durationFast} ease-in-out;
    ${mq.largeMobile(css`
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    `)};
  `}
`;

StyledDialog.defaultProps = {
  theme: defaultTheme,
};

const StyledDialogCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const StyledDialogContent = styled.div<{ $maxWidth?: number; shown?: boolean }>`
  ${({ theme, $maxWidth, shown }) => css`
    display: block;
    width: 100%;
    max-width: ${$maxWidth}px;
    box-sizing: border-box;
    padding: ${`${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
    background: ${theme.orbit.paletteWhite};
    border-radius: 12px;
    bottom: ${shown ? "0" : "-100%"};
    box-shadow: ${theme.orbit.boxShadowOverlay};
    text-align: center;
    ${StyledText} {
      text-align: center;
    }
    ${mq.largeMobile(css`
      min-width: ${theme.orbit.widthModalSmall};
      border-radius: 9px;
      padding: ${theme.orbit.spaceLarge};
      text-align: ${left};
      ${StyledText} {
        text-align: ${left};
      }
    `)};
  `}
`;

StyledDialogContent.defaultProps = {
  theme: defaultTheme,
};

const StyledAction = styled.div`
  width: 100%;

  ${StyledButtonPrimitive} {
    width: 100%;
    flex: 1 1 auto;
  }

  ${mq.largeMobile(
    css`
      width: auto;
      ${StyledButtonPrimitive} {
        width: auto;
        flex: 0 0 auto;
      }
    `,
  )};
`;

StyledAction.defaultProps = {
  theme: defaultTheme,
};

const IllustrationContainer = styled.div`
  margin-bottom: 16px;
`;

const Dialog = ({
  dataTest,
  id,
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
  maxWidth,
  renderInPortal = true,
  illustration,
  lockScrolling = true,
}: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(wrapperRef, lockScrolling);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const transitionLength = React.useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);
  const [shown, setShown] = React.useState(false);

  useFocusTrap(ref);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShown(true);
      if (ref.current) {
        ref.current.focus();
      }
    }, transitionLength);
    return () => clearTimeout(timer);
  }, [transitionLength]);

  const handleClose = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current && onClose) {
      if (ref.current && !ref.current.contains(ev.currentTarget)) onClose();
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

  const dialogID = useRandomId();

  const dialog = (
    <StyledDialog
      ref={wrapperRef}
      data-test={dataTest}
      id={id}
      onClick={handleClose}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogID}
    >
      <StyledDialogCenterWrapper>
        <StyledDialogContent shown={shown} ref={ref} id={dialogID} $maxWidth={maxWidth}>
          {illustration && <IllustrationContainer>{illustration}</IllustrationContainer>}
          <Stack spacing="XSmall" spaceAfter="medium">
            {title && (
              <Heading type="title3" align="center" largeMobile={{ align: "start" }}>
                {title}
              </Heading>
            )}
            {description && <Text type="secondary">{description}</Text>}
          </Stack>
          <Stack
            direction="column-reverse"
            spacing="XSmall"
            largeMobile={{ direction: "row", justify: "end" }}
          >
            {secondaryAction && <StyledAction>{secondaryAction}</StyledAction>}
            <StyledAction>{primaryAction}</StyledAction>
          </Stack>
        </StyledDialogContent>
      </StyledDialogCenterWrapper>
    </StyledDialog>
  );

  return renderInPortal ? <Portal renderInto="modals">{dialog}</Portal> : dialog;
};

export default Dialog;
