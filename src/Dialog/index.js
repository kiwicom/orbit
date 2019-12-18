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
  z-index: 800;
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
  padding: 16px;
  background: white;
  border-radius: 9px 9px 0 0;
  bottom: ${({ shown }) => (shown ? "0" : "-100%")};
  transition: bottom ${({ theme }) => theme.orbit.durationFast} linear;
  ${mq.largeMobile(css`
    bottom: auto;
    max-width: 540px;
    border-radius: 9px;
    padding: 24px;
  `)};
`;

StyledDialogContent.defaultProps = {
  theme: defaultTheme,
};

const StyledAction = styled(({ width, theme, ...props }) => <div {...props} />)`
  width: calc(100% * ${({ width }) => Math.floor(width * 100)});
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

const Dialog = ({ title, description, primaryAction, secondaryAction }: Props) => {
  const theme = useTheme();
  const transitionLength = React.useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShown(true);
    }, transitionLength);
    return () => clearTimeout(timer);
  }, [transitionLength]);

  return (
    <Portal renderInto="modals">
      <StyledDialog shown={shown}>
        <StyledDialogContent shown={shown}>
          <Stack spacing="tight" spaceAfter="medium">
            {title && <Heading type="title3">{title}</Heading>}
            {description && <Text type="secondary">{description}</Text>}
          </Stack>
          <Stack direction="row" largeMobile={{ justify: "end" }}>
            {secondaryAction && <StyledAction width={1 / 3}>{secondaryAction}</StyledAction>}
            <StyledAction width={2 / 3}>{primaryAction}</StyledAction>
          </Stack>
        </StyledDialogContent>
      </StyledDialog>
    </Portal>
  );
};

export default Dialog;
