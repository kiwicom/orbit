// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import mq from "../utils/mediaQuery";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import Text from "../Text";
import useTheme from "../hooks/useTheme";
import WizardStepIcon, { StyledStepIconContainer } from "./WizardStepIcon";
import { WizardStepContext } from "./WizardContext";
import defaultTheme from "../defaultTheme";
import { left, right } from "../utils/rtl";
import type { Props } from "./WizardStep";
import { resolveStepBorder } from "./helpers";

const StyledBorder = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.orbit.paletteCloudNormal};
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 40px;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBorder.defaultProps = {
  theme: defaultTheme,
};

const StyledContainer = styled.li`
  ${({ theme, isCompact, status }) => css`
    position: relative;
    margin: -1px 0;
    ${isCompact &&
    css`
      button {
        border-radius: 0;
        background: ${status === "disabled" && theme.orbit.paletteCloudLight};
        opacity: ${status === "disabled" && "1"};
      }
    `}

    ${mq.desktop(css`
      &:hover {
        ${StyledStepIconContainer} {
          transition: box-shadow ${theme.orbit.durationFast} ease-in;
          box-shadow: ${status !== "disabled" &&
          `0 0 0 6px ${convertHexToRgba(theme.orbit.paletteProductNormal, 20)}`};
        }
      }
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledContent = styled.div`
  /* place above progress bar */
  position: relative;
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContent.defaultProps = {
  theme: defaultTheme,
};

const StyledActiveMarker = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 1px;
    ${left}: 0;
    bottom: 1px;
    width: 2px;
    border-top-${right}-radius: ${theme.orbit.borderRadiusNormal};
    border-bottom-${right}-radius: ${theme.orbit.borderRadiusNormal};
    background: ${theme.orbit.paletteProductNormal};
    pointer-events: none;
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledActiveMarker.defaultProps = {
  theme: defaultTheme,
};

const StyledProgressBar = styled.div`
  position: relative;
  ${resolveStepBorder};
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledProgressBar.defaultProps = {
  theme: defaultTheme,
};

const StyledLabel = styled.div`
  ${({ theme, active }) => css`
    display: block;
    span {
      display: block;
      color: ${theme.orbit.colorTextSecondary};
    }
    ${active &&
    css`
      span {
        font-weight: ${theme.orbit.fontWeightMedium};
        color: ${theme.orbit.colorTextPrimary};
      }
    `}
  `};
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonWrapper = styled.div`
  ${({ theme, active }) => css`
    cursor: pointer;
    padding: 0 ${theme.orbit.spaceXSmall};

    ${!active &&
    css`
      &:hover,
      &:focus {
        ${StyledLabel} {
          span {
            text-decoration: underline;
            color: ${theme.orbit.colorTextPrimary};
          }
        }
      }
    `}
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const WizardStep = ({ dataTest, title, onClick }: Props): React.Node => {
  const theme = useTheme();
  const {
    index,
    status,
    isColumnOnDesktop,
    nextStepStatus,
    isCompact,
    isActive,
    onChangeStep,
    onClose,
    isLastStep,
  } = React.useContext(WizardStepContext);

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    if (onClick) onClick(event);
    if (onChangeStep) onChangeStep(index);
    onClose();
  };

  if (isCompact) {
    return (
      <StyledContainer data-test={dataTest} isCompact={isCompact} status={status}>
        <ButtonLink
          disabled={status === "disabled"}
          type="secondary"
          fullWidth
          iconLeft={<WizardStepIcon />}
          ariaCurrent={isActive ? "step" : "false"}
          onClick={handleClick}
        >
          {status === "disabled" ? (
            <Text as="span" type="secondary">
              {title}
            </Text>
          ) : (
            title
          )}
        </ButtonLink>
        {isActive && <StyledActiveMarker />}
        {status !== "disabled" && <StyledBorder />}
      </StyledContainer>
    );
  }

  const step = (
    <Stack
      flex
      direction={isColumnOnDesktop ? "row" : "column"}
      align={isColumnOnDesktop ? "start" : "center"}
      spacing="XSmall"
      spaceAfter={isColumnOnDesktop ? "large" : "none"}
    >
      <WizardStepIcon />
      <div
        css={css`
          padding: ${theme.orbit.paddingBadge};
        `}
      >
        {status === "disabled" ? (
          <Text as="div" type="secondary" size="small" align="center">
            {title}
          </Text>
        ) : (
          <StyledLabel active={isActive}>
            <Text as="span" size="small" align="center">
              {title}
            </Text>
          </StyledLabel>
        )}
      </div>
    </Stack>
  );

  return (
    <StyledContainer data-test={dataTest} isCompact={isCompact} status={status}>
      <StyledProgressBar
        status={status}
        index={index}
        isLastStep={isLastStep}
        nextStepStatus={nextStepStatus}
        isColumnOnDesktop={isColumnOnDesktop}
      />
      <StyledContent>
        <Stack flex direction="column" align={isColumnOnDesktop ? "start" : "center"}>
          {status === "disabled" ? (
            <span
              css={css`
                padding: 0 ${theme.orbit.spaceXSmall};
              `}
            >
              {step}
            </span>
          ) : (
            <StyledButtonWrapper
              active={isActive}
              role="button"
              tabIndex={0}
              aria-current={isActive ? "step" : "false"}
              onClick={event => {
                event.currentTarget.blur();
                handleClick(event);
              }}
              // keep focus for people who are navigating with the keyboard
              onKeyDown={event => {
                if (event.key === "Enter") {
                  handleClick(event);
                }
              }}
            >
              {step}
            </StyledButtonWrapper>
          )}
        </Stack>
      </StyledContent>
    </StyledContainer>
  );
};

export default WizardStep;
