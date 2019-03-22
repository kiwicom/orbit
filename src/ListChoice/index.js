// @flow
import * as React from "react";
import styled from "styled-components";

import Heading, { StyledHeading } from "../Heading";
import Checkbox, { Label } from "../Checkbox";
import Text from "../Text";
import defaultTokens from "../defaultTokens";
import { getSize } from "../Icon";
import { right } from "../utils/rtl";

import type { Props } from "./index";

const StyledListChoiceIcon = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 0 0 auto;
  margin-${right}: ${({ theme }) => theme.orbit.spaceSmall};

  svg {
    width: ${getSize("small")};
    height: ${getSize("small")};
    color: ${({ theme }) => theme.orbit.colorIconPrimary};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

StyledListChoiceIcon.defaultProps = {
  theme: defaultTokens,
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

  &:hover {
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
    ${StyledListChoiceIcon} svg {
      color: ${({ theme }) => theme.orbit.colorIconAttention};
    }
  }

  ${Label} {
    width: auto;
  }
`;

StyledListChoice.defaultProps = {
  theme: defaultTokens,
};

const StyledListChoiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-${right}: ${({ theme }) => theme.orbit.spaceSmall};

  ${StyledHeading} {
    line-height: ${({ theme }) => theme.orbit.lineHeightText};
  }
`;

StyledListChoiceContent.defaultProps = {
  theme: defaultTokens,
};

const ListChoice = (props: Props) => {
  const { dataTest, icon, title, description, selectable, onClick, selected } = props;

  return (
    <StyledListChoice onClick={onClick} data-test={dataTest}>
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
      {selectable && <Checkbox checked={selected} readOnly />}
    </StyledListChoice>
  );
};

export default ListChoice;
