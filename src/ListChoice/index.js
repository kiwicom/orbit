// @flow
import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Checkbox, { Label } from "../Checkbox";
import Text from "../Text";
import defaultTheme from "../defaultTheme";
import { getSize } from "../Icon";
import { right } from "../utils/rtl";
import handleKeyDown from "../utils/handleKeyDown";

import type { Props } from "./index";

const StyledListChoiceIcon = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 0 0 auto;
  margin-${right}: ${({ theme }) => theme.orbit.spaceSmall};
  height: ${({ theme }) => theme.orbit.lineHeightTextNormal};

  svg {
    align-self: center;
    width: ${getSize("small")};
    height: ${getSize("small")};
    color: ${({ theme }) => theme.orbit.colorIconPrimary};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

StyledListChoiceIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoice = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
    ${StyledListChoiceIcon} svg {
      color: ${({ theme }) => theme.orbit.colorIconPrimary};
    }
    outline: none;
  }

  ${Label} {
    width: auto;
  }
`;

StyledListChoice.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-${right}: ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledListChoiceContent.defaultProps = {
  theme: defaultTheme,
};

const ListChoice = (props: Props) => {
  const { dataTest, icon, title, description, selectable, onClick, selected } = props;

  return (
    <StyledListChoice
      onClick={onClick}
      data-test={dataTest}
      onKeyDown={ev => handleKeyDown(ev, onClick)}
      tabIndex="0"
      role="button"
    >
      {icon && <StyledListChoiceIcon>{icon}</StyledListChoiceIcon>}
      <StyledListChoiceContent>
        <Heading type="title4" element="div">
          {title}
        </Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </StyledListChoiceContent>
      {selectable && <Checkbox checked={selected} readOnly tabIndex="-1" />}
    </StyledListChoice>
  );
};

export default ListChoice;
