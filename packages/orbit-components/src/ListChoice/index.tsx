import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../Heading";
import Checkbox, { StyledLabel as Label } from "../Checkbox";
import Text from "../Text";
import defaultTheme from "../defaultTheme";
import { getSize } from "../Icon";
import { right } from "../utils/rtl";
import handleKeyDown from "../utils/handleKeyDown";
import { Props } from "./types";

const StyledListChoiceIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: flex-start;
    flex: 0 0 auto;
    margin-${right}: ${theme.orbit.spaceXSmall};
    height: ${theme.orbit.lineHeightTextNormal};

    svg {
      align-self: center;
      width: ${getSize("medium")};
      height: ${getSize("medium")};
      color: ${theme.orbit.colorIconPrimary};
      transition: color ${theme.orbit.durationFast} ease-in-out;
    }
  `}
`;

StyledListChoiceIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoice = styled.div<Partial<Props>>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: ${`${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
    border-bottom: 1px solid ${theme.orbit.paletteCloudNormal};
    background-color: ${theme.orbit.paletteWhite};
    transition: background-color 0.15s ease-in-out;
    cursor: ${disabled ? "not-allowed" : "pointer"};

    &:last-child {
      border: none;
    }

    &:focus,
    &:hover {
      outline: none;
      button {
        background: none;
      }
      ${!disabled &&
      css`
        background: ${theme.orbit.paletteCloudLight};
        ${StyledListChoiceIcon} svg {
          color: ${theme.orbit.colorIconPrimary};
        }
      `};
    }

    ${Label} {
      width: auto;
    }
  `}
`;

StyledListChoice.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoiceContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-${right}: ${theme.orbit.spaceSmall};
`}
`;

StyledListChoiceContent.defaultProps = {
  theme: defaultTheme,
};

const ListChoice = ({
  dataTest,
  id,
  icon,
  action,
  title,
  description,
  selectable,
  onClick,
  selected,
  disabled,
}: Props) => {
  const conditionalProps = {
    ...(selectable ? { "aria-checked": selected } : null),
  };

  return (
    <StyledListChoice
      onClick={!disabled ? onClick : undefined}
      data-test={dataTest}
      id={id}
      onKeyDown={!disabled ? handleKeyDown<HTMLDivElement>(onClick) : undefined}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      aria-disabled={disabled}
      role={selectable ? "checkbox" : "button"}
      {...conditionalProps}
    >
      {icon && <StyledListChoiceIcon>{icon}</StyledListChoiceIcon>}
      <StyledListChoiceContent>
        <Heading type="title4">{title}</Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </StyledListChoiceContent>
      {selectable && <Checkbox checked={selected} readOnly disabled={disabled} tabIndex={-1} />}
      {!selectable && action}
    </StyledListChoice>
  );
};

export default ListChoice;
