import React from "react";

import {
  StyledCategoryContainer,
  StyledCategoryName,
  StyledCategoryItems,
} from "./primitives/StyledCategory";

interface Props {
  name: string;
  children: React.ReactNode;
}

export default function Category({ name, children }: Props) {
  return (
    <StyledCategoryContainer>
      <StyledCategoryName>{name}</StyledCategoryName>
      <StyledCategoryItems>{children}</StyledCategoryItems>
    </StyledCategoryContainer>
  );
}
