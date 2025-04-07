import styled, { css } from "styled-components";
import React from "react";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import ChevronForward from "@kiwicom/orbit-components/lib/icons/ChevronForward";
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle";
import { defaultTheme, Badge, Heading } from "@kiwicom/orbit-components";

import { DEFAULT_COLORS } from "../consts";
import ColorContext from "../ColorContext";
import { isDeepEqual, get } from "../helpers";

interface StyledProps extends React.PropsWithChildren {
  opened?: boolean;
  theme: typeof defaultTheme;
  onClick?: () => void;
}

const StyledColorTab = styled.div``;

const StyledColorTabHeader = styled.div<StyledProps>`
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

const StyledColorTabIcon = styled.div<{ theme: typeof defaultTheme }>`
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 12px;
  color: ${({ theme }) => theme.orbit.paletteCloudDark};
`;

const StyledColorTabChildren = styled.div<StyledProps>`
  ${({ opened, theme }) => css`
    max-height: ${opened ? 100 : 0};
    overflow: hidden;
    background: ${opened && theme.orbit.backgroundBody};
    padding-top: ${opened ? "18px" : "6px"};
    margin-top: -6px;
  `}
`;

const StyledAdjusted = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

const hasAdjustedSomeColor = (colorPath: string, currentColors: Record<string, any>) => {
  const currentColorObject = get(colorPath, currentColors);
  const defaultColorObject = get(colorPath, DEFAULT_COLORS);

  return !isDeepEqual(currentColorObject, defaultColorObject);
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
            <Badge type="infoSubtle" icon={<InformationCircle />}>
              Adjusted
            </Badge>
          </StyledAdjusted>
        )}
        <StyledColorTabIcon>
          {opened ? <ChevronDown size="small" /> : <ChevronForward size="small" />}
        </StyledColorTabIcon>
      </StyledColorTabHeader>
      <StyledColorTabChildren opened={opened}>{children}</StyledColorTabChildren>
    </StyledColorTab>
  );
};

export default ColorTab;
