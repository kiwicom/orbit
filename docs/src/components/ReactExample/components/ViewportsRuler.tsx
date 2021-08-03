import React from "react";
import styled, { css } from "styled-components";

import { QUERIES, CELL_HEIGHT } from "../consts";

interface Props {
  onChangeSize: (width: number) => void;
}

const StyledViewports = styled.div`
  ${({ theme }) => `
    position: relative;
    overflow: hidden;
    height: ${CELL_HEIGHT}px;
    border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
    button:first-child {
      border-left: none;
      border-right: none;
    }
  `}
`;

const StyledCell = styled.button<{
  active?: boolean;
  currentWidth?: number;
  width: number;
  index: number;
}>`
  ${({ theme, active, width, index }) => css`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    background: ${active && theme.orbit.paletteCloudLight};
    color: ${theme.orbit.paletteInkNormal};
    cursor: pointer;
    z-index: ${index};
    width: ${width}px;
    height: ${CELL_HEIGHT - 1}px;
    border-right: 1px solid ${theme.orbit.paletteCloudDark};
    border-left: 1px solid ${theme.orbit.paletteCloudDark};
    span {
      visibility: ${active ? "visible" : "hidden"};
    }
    &:focus {
      outline: none;
      box-shadow: ${theme.orbit.boxShadowFixed};
    }
  `};
`;

const ViewportsRuler = ({ onChangeSize }: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [viewports, setViewports] = React.useState<[string, number][]>([]);
  const [visibleValue, setVisibleValue] = React.useState("smallMobile (320)");

  const ref = React.useRef<HTMLDivElement>(null);

  const setRuler = React.useCallback(() => {
    const currentViews = Object.entries(QUERIES)
      .filter(([, value]) => value <= windowWidth)
      .concat([["fullWidth", windowWidth]])
      .reverse();

    setActiveIdx(currentViews.length - 1);

    setViewports(currentViews);
  }, [setViewports, windowWidth]);

  React.useEffect(() => {
    if (ref.current) setWindowWidth(ref.current?.clientWidth);

    onChangeSize(320);
    setRuler();

    window.addEventListener("resize", setRuler);
    return () => window.removeEventListener("resize", setRuler);
  }, [setRuler, onChangeSize]);

  const handleClick = (size: number, idx: number) => {
    onChangeSize(size);
    setActiveIdx(idx);
  };

  return (
    <StyledViewports ref={ref}>
      {viewports.map(([name, value], i) => (
        <StyledCell
          active={activeIdx === i}
          key={name}
          width={value}
          index={i}
          onMouseEnter={() => setVisibleValue(`${name} (${value})`)}
          onClick={() => handleClick(value, i)}
        >
          <span>{visibleValue}</span>
        </StyledCell>
      ))}
    </StyledViewports>
  );
};

export default ViewportsRuler;
