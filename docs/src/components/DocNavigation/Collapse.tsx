import React from "react";
import { Collapse as OrbitCollapse } from "@kiwicom/orbit-components";

import {
  StyledCollapseWrapper,
  StyledCollapseLabel,
  StyledCollapseContent,
} from "./primitives/StyledCollapse";

interface Props extends React.ComponentProps<typeof OrbitCollapse> {
  hasCategories: boolean;
}

export default function Collapse({ expanded, label, hasCategories, children, onClick }: Props) {
  return (
    <StyledCollapseWrapper>
      <OrbitCollapse
        expanded={expanded}
        label={<StyledCollapseLabel>{label}</StyledCollapseLabel>}
        onClick={onClick}
      >
        <StyledCollapseContent hasCategories={hasCategories}>{children}</StyledCollapseContent>
      </OrbitCollapse>
    </StyledCollapseWrapper>
  );
}
