import React from "react";
import styled, { css } from "styled-components";

import { rangeAppend, updateViewportName } from "./helpers";

const MIN_WIDTH = 1400;
const CELL_HEIGHT = 33;
const MIDDLE_CELL_IDX = 3;

const DEFAULT_ACTIVE = [1, 1, 1, 1, 1, 1, 1];

interface Props {
  onChangeSize: (width: number) => void;
}

const StyledViewports = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 320px 1fr 2fr 2fr;
    border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
    span:last-child {
      border-right: none;
    }
  `}
`;

const StyledCell = styled.span<{ active?: boolean; currentWidth?: number }>`
  ${({ theme, active }) => css`
    display: flex;
    background: ${active && theme.orbit.paletteCloudLight};
    color: ${theme.orbit.paletteInkNormal};
    align-items: center;
    cursor: pointer;
    justify-content: center;
    height: ${CELL_HEIGHT}px;
    border-right: 1px solid ${theme.orbit.paletteCloudDark};
  `};
`;

const ViewportsRuler = ({ onChangeSize }: Props) => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(MIN_WIDTH);
  const [activeItems, setActiveItems] = React.useState<number[]>(DEFAULT_ACTIVE);

  const { current: cellsWidths } = React.useRef<number[]>([]);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    if (onChangeSize) onChangeSize(currentWidth);
  }, [currentWidth, onChangeSize]);

  React.useEffect(() => {
    if (mounted.current) {
      const sum = cellsWidths.filter((c, i) => activeItems[i]).reduce((a, b) => a + b, 1);
      setCurrentWidth(sum);
    } else mounted.current = true;
  }, [activeItems]);

  const updateCurr = idx => {
    if (idx === MIDDLE_CELL_IDX) return;

    if (!activeItems[idx]) {
      rangeAppend({ idx, callback: setActiveItems, middle: MIDDLE_CELL_IDX, arr: activeItems });
    } else {
      setActiveItems([0, 0, 0, 1, 0, 0, 0]);
    }
  };

  return (
    <StyledViewports>
      {new Array(7).fill(null).map((_, i) =>
        React.createElement(
          StyledCell,
          {
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            // eslint-disable-next-line no-return-assign
            ref: r => (cellsWidths[i] = r && r.clientWidth),
            onClick: () => updateCurr(i),
            active: activeItems[i],
          },
          i === MIDDLE_CELL_IDX && updateViewportName(currentWidth),
        ),
      )}
    </StyledViewports>
  );
};

export default ViewportsRuler;
