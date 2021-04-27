import React from "react";
import styled, { css } from "styled-components";

import { DEFAULT_ACTIVE, MIDDLE_CELL_IDX, MIN_WIDTH, CELL_HEIGHT } from "./consts";
import { rangeAppend, rangeDelete, updateViewportName, isAllActive } from "./helpers";

/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */

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

  React.useEffect(() => {
    const sum = cellsWidths.filter((c, i) => activeItems[i]).reduce((a, b) => a + b, 1);
    setCurrentWidth(sum);
    if (onChangeSize) onChangeSize(currentWidth);
  }, [currentWidth, onChangeSize, activeItems]);

  const updateCurr = idx => {
    if (!activeItems[idx]) {
      rangeAppend({ idx, callback: setActiveItems, middle: MIDDLE_CELL_IDX, arr: activeItems });
    } else {
      rangeDelete({ idx, callback: setActiveItems, middle: MIDDLE_CELL_IDX, arr: activeItems });
    }
  };

  return (
    <StyledViewports>
      {new Array(7).fill(null).map((_, i) =>
        React.createElement(
          StyledCell,
          {
            key: i,
            ref: r => (cellsWidths[i] = r && r.clientWidth),
            onClick: () => updateCurr(i),
            active: activeItems[i],
          },
          i === MIDDLE_CELL_IDX && updateViewportName(currentWidth, isAllActive(activeItems)),
        ),
      )}
    </StyledViewports>
  );
};

export default ViewportsRuler;
