import styled, { css } from "styled-components";
import React from "react";
import equals from "ramda/src/equals";
import path from "ramda/src/path";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight";
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import { defaultTheme } from "@kiwicom/orbit-components";

import { DEFAULT_COLORS } from "../consts";
import ColorContext from "../ColorContext";

const StyledColorTab = styled.div`
  font-size: 14px;
`;

const StyledColorTabHeader = styled.div`
  ${({ opened, theme }) => css`
    cursor: pointer;
    padding: 14px 12px;
    border-radius: 6px;
    position: relative;
    background: ${opened && theme.orbit.paletteCloudDark};

    &:hover {
      background: ${opened ? theme.orbit.paletteCloudDark : theme.orbit.paletteCloudLight};
    }
  `}
`;

StyledColorTabHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledColorTabIcon = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 12px;
  color: ${({ theme }) => theme.orbit.paletteCloudDarker};
`;

StyledColorTabIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledColorTabChildren = styled.div`
  ${({ opened, theme }) => css`
    max-height: ${opened ? 100 : 0};
    overflow: hidden;
    background: ${opened && theme.orbit.backgroundBody};
    padding-top: ${opened ? "18px" : "6px"};
    margin-top: -6px;
  `}
`;

StyledColorTabChildren.defaultProps = {
  theme: defaultTheme,
};

const StyledAdjusted = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

const hasAdjustedSomeColor = (colorPath, currentColors) => {
  const currentColorObject = path(colorPath.split("."), currentColors);
  const defaultColorObject = path(colorPath.split("."), DEFAULT_COLORS);

  return !equals(currentColorObject, defaultColorObject);
};

const ColorTab = ({ title, children, colorPath }) => {
  const [opened, setOpened] = React.useState(false);
  const colorContext = React.useContext(ColorContext);

  const isAdjusted = hasAdjustedSomeColor(colorPath, colorContext.colors);

  return (
    <StyledColorTab>
      <StyledColorTabHeader opened={opened} onClick={() => setOpened(!opened)}>
        <Heading type="title4">{title}</Heading>
        {isAdjusted && (
          <StyledAdjusted>
            <Badge type="info" icon={<InformationCircle />} size="small">
              Adjusted
            </Badge>
          </StyledAdjusted>
        )}
        <StyledColorTabIcon>
          {opened ? <ChevronDown size="small" /> : <ChevronRight size="small" />}
        </StyledColorTabIcon>
      </StyledColorTabHeader>
      <StyledColorTabChildren opened={opened}>{children}</StyledColorTabChildren>
    </StyledColorTab>
  );
};

export default ColorTab;
