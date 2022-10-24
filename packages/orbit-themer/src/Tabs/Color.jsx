import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import path from "ramda/src/path";
import AlertCircle from "@kiwicom/orbit-components/lib/icons/AlertCircle";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";

import ColorContext from "../ColorContext";
import { DEFAULT_COLORS } from "../consts";

const StyledColor = styled.div`
  padding: 12px;
  margin: 4px 12px;
  border-radius: 6px;

  &:hover {
    background: #fff;
  }
`;
const StyledColorName = styled.span``;

const StyledColorNameExtra = styled.span`
  color: #7f91a8;
`;

const StyledChoosedColor = styled.div`
  float: right;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: ${({ isAdjusted }) => (isAdjusted ? `2px solid #0172cb` : `1px solid #a6b6c8`)};
  border-radius: 3px;
  cursor: pointer;
  background: ${({ color }) => color};
`;

const StyledColorPickerOuter = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const StyledColorPicker = styled.div`
  position: absolute;
  z-index: 11;
`;

const StyledAdjustedColor = styled.div`
  float: right;
  margin-right: 4px;
`;

const Color = ({ name, extra, objectKey }) => {
  const [openedColorPicker, setOpenedColorPicker] = React.useState(false);
  const defaultColor = path(objectKey.split("."), DEFAULT_COLORS);

  return (
    <ColorContext.Consumer>
      {({ setColor, colors }) => {
        const color = path(objectKey.split("."), colors);
        const isAdjustedColor = color !== defaultColor;

        return (
          <StyledColor>
            <StyledColorName>
              {name}
              <StyledColorNameExtra>{extra && `:${extra}`}</StyledColorNameExtra>
            </StyledColorName>
            <StyledChoosedColor
              isAdjusted={isAdjustedColor}
              color={color}
              onClick={() => setOpenedColorPicker(true)}
            />
            {isAdjustedColor && (
              <StyledAdjustedColor>
                <Tooltip content="The color has been changed">
                  <AlertCircle size="small" color="info" />
                </Tooltip>
              </StyledAdjustedColor>
            )}
            {openedColorPicker && (
              <>
                <StyledColorPickerOuter onClick={() => setOpenedColorPicker(false)} />
                <StyledColorPicker>
                  <SketchPicker
                    color={color}
                    onChange={newColor => {
                      setColor(objectKey, newColor);
                    }}
                  />
                </StyledColorPicker>
              </>
            )}
          </StyledColor>
        );
      }}
    </ColorContext.Consumer>
  );
};

export default Color;
