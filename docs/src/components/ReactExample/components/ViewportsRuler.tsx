import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery, Text } from "@kiwicom/orbit-components";
import useResizeObserver from "use-resize-observer";

import { QUERIES, CELL_HEIGHT } from "../consts";

interface Props {
  onChangeSize: (width: number | string) => void;
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

const StyledCell = styled.button.attrs({ type: "button" })<{
  $active: boolean;
  $width: number | string;
}>`
  ${({ theme, $active, $width }) => css`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    background: ${$active && theme.orbit.paletteCloudLight};
    color: ${theme.orbit.paletteInkNormal};
    cursor: pointer;
    width: ${typeof $width === "number" ? `${$width}px` : $width};
    height: ${CELL_HEIGHT - 1}px;
    border-right: 1px solid ${theme.orbit.paletteCloudDark};
    border-left: 1px solid ${theme.orbit.paletteCloudDark};
    span {
      visibility: ${$active ? "visible" : "hidden"};
    }
    &:focus {
      outline: none;
      box-shadow: ${theme.orbit.boxShadowFixed};
    }
  `}
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-content: center;
  pointer-events: none;
`;

const ViewportsRuler = ({ onChangeSize }: Props) => {
  const [activeViewport, setActiveViewport] = React.useState<string>("smallMobile");
  const [targetViewport, setTargetViewport] = React.useState<string | null>(null);
  const [viewports, setViewports] = React.useState<string[]>(Object.keys(QUERIES));
  const { ref: containerRef, width: containerWidth } = useResizeObserver<HTMLDivElement>();
  const { isLargeMobile } = useMediaQuery();

  React.useEffect(() => {
    const newViewports = Object.keys(QUERIES).filter(
      viewport =>
        typeof containerWidth !== "number" ||
        typeof QUERIES[viewport] === "string" ||
        QUERIES[viewport] < containerWidth,
    );

    setViewports(prevViewports =>
      prevViewports.length === newViewports.length ? prevViewports : newViewports,
    );
    setActiveViewport(prevActive =>
      newViewports.includes(prevActive) ? prevActive : newViewports[newViewports.length - 1],
    );
  }, [containerWidth]);

  React.useEffect(() => {
    onChangeSize(QUERIES[activeViewport]);
  }, [activeViewport, onChangeSize]);

  const visibleViewport = targetViewport || activeViewport;
  const visibleSize = QUERIES[visibleViewport];

  return (
    <div ref={containerRef}>
      {isLargeMobile && (
        <StyledViewports>
          {[...viewports].reverse().map(viewport => (
            <StyledCell
              key={viewport}
              aria-label={`${viewport} (${QUERIES[viewport]})`}
              $active={targetViewport ? viewport === targetViewport : viewport === activeViewport}
              $width={QUERIES[viewport]}
              onMouseEnter={() => setTargetViewport(viewport)}
              onMouseLeave={() => setTargetViewport(null)}
              onClick={() => setActiveViewport(viewport)}
            />
          ))}
          <StyledLabel>
            <Text as="div">
              {visibleViewport} (
              {typeof visibleSize === "number" ? `${visibleSize}px` : visibleSize})
            </Text>
          </StyledLabel>
        </StyledViewports>
      )}
    </div>
  );
};

export default ViewportsRuler;
