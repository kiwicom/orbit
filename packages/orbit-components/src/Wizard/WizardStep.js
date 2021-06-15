// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import Text from "../Text";
import useTheme from "../hooks/useTheme";
import WizardStepIcon from "./WizardStepIcon";
import { WizardStepContext } from "./WizardContext";
import defaultTheme from "../defaultTheme";
import { left, right } from "../utils/rtl";
import type { Props } from "./WizardStep";

const StyledContainer = styled.li`
  ${({ theme, isCompact, status }) =>
    isCompact &&
    css`
      position: relative;
      button {
        border-radius: 0;
      }
      ${status === "disabled" &&
      css`
        background: ${theme.orbit.paletteCloudLight};
        button {
          /* to make coloring more precise in disabled state */
          opacity: 1;
        }
      `};
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
    top: 0;
    ${left}: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.orbit.paletteProductNormal};
    pointer-events: none;
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledActiveMarker.defaultProps = {
  theme: defaultTheme,
};

const StyledProgressBar = styled.div`
  ${({ theme, status, nextStepStatus }) => css`
    position: relative;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: ${parseFloat(theme.orbit.heightIconSmall) / 2 - 1}px;
      width: 50%;
      height: 2px;
    }
    &:before {
      ${left}: 0;
      background: ${status === "disabled"
        ? theme.orbit.paletteCloudNormalHover
        : theme.orbit.paletteProductNormal};
    }
    &:after {
      ${right}: 0;
      background: ${status === "disabled" || nextStepStatus === "disabled"
        ? theme.orbit.paletteCloudNormalHover
        : theme.orbit.paletteProductNormal};
    }
  `}
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

const StyledButtonWrapper = styled.div.attrs({ tabIndex: 0, role: "button" })`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 0 ${theme.orbit.spaceXSmall};

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
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const WizardStep = ({ dataTest, title, onClick }: Props): React.Node => {
  const theme = useTheme();
  const { index, status, nextStepStatus, isCompact, isActive, onChangeStep } = React.useContext(
    WizardStepContext,
  );

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    if (onClick) onClick(event);
    if (onChangeStep) onChangeStep(index);
  };

  if (isCompact) {
    return (
      <StyledContainer data-test={dataTest} isCompact={isCompact} status={status}>
        {isActive && <StyledActiveMarker />}
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
      </StyledContainer>
    );
  }

  const step = (
    <Stack direction="column" align="center" spacing="XSmall">
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
      <StyledProgressBar status={status} nextStepStatus={nextStepStatus} />
      <StyledContent>
        <Stack flex direction="column" align="center">
          {isActive || status === "disabled" ? (
            step
          ) : (
            <StyledButtonWrapper
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
