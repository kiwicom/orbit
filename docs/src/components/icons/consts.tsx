import React from "react";

import type { SearchResult } from "../Search/types";
import PuzzleIcon from "./Puzzle";
import TypographyIcon from "./Typography";
import ModulePuzzleIcon from "../../images/streamline-light/module-puzzle.svg";
import ColorBrushIcon from "../../images/streamline-light/color-brush.svg";
import ExpandDiagonalIcon from "../../images/streamline-light/expand-diagonal-1.svg";
import LoveItTextIcon from "../../images/streamline-light/love-it-text.svg";
import SpellingCheckIcon from "../../images/streamline-light/spelling-check.svg";
import ArrangeLetterIcon from "../../images/streamline-light/arrange-letter.svg";
import ReadArt from "../../images/streamline-light/read-art.svg";
import ComputerBugIcon from "../../images/streamline-light/computer-bug.svg";

export const ICON_MAP = {
  Components: <PuzzleIcon />,
  "Design patterns": <ModulePuzzleIcon />,
  Typography: <TypographyIcon />,
  Colors: <ColorBrushIcon />,
  Spacing: <ExpandDiagonalIcon />,
  "Voice & tone": <LoveItTextIcon />,
  "Grammar & mechanics": <SpellingCheckIcon />,
  Glossary: <ArrangeLetterIcon />,
  "Report a bug": <ComputerBugIcon />,
};

export const getIconFromItem = (item: SearchResult) => {
  const DefaultIcon = ReadArt;
  const itemCategory = (item.breadcrumbs && item.breadcrumbs[0]) || "";
  if (itemCategory === "Foundation") {
    const subCategory = (item.breadcrumbs && item.breadcrumbs[1]) || "";
    return ICON_MAP[subCategory] || <DefaultIcon />;
  }
  if (itemCategory === "For Kiwi.com use") {
    const subCategory = (item.breadcrumbs && item.breadcrumbs[2]) || "";
    return ICON_MAP[subCategory] || <DefaultIcon />;
  }
  return ICON_MAP[itemCategory] || <DefaultIcon />;
};
