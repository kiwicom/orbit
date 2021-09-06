import React from "react";

import { StyledCategoryContainer, StyledCategoryName } from "./primitives/StyledCategory";

interface Props {
  name: React.ReactNode;
  children: React.ReactNode;
}

export default function Category({ name, children }: Props) {
  return (
    <StyledCategoryContainer>
      <StyledCategoryName>{name}</StyledCategoryName>
      {children}
    </StyledCategoryContainer>
  );
}
