import * as React from "react";
import styled, { css } from "styled-components";

import type { Props, Option } from "../types";
import ListChoice, { StyledListChoice } from "../../ListChoice";
import defaultTheme from "../../defaultTheme";
import CheckCircle from "../../icons/CheckCircle";

const StyledListChoiceWrapper = styled.li<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    ${StyledListChoice} {
      background: ${$active && theme.orbit.paletteCloudLight};
    }
  `};
`;

StyledListChoiceWrapper.defaultProps = {
  theme: defaultTheme,
};

type InputSelectOptionProps = {
  id: Props["id"];
  active: boolean;
  isSelected: boolean;
  title: Option["title"];
  description: Option["description"];
  onClick: (ev: React.SyntheticEvent) => void;
};

const InputSelectOption = React.forwardRef<HTMLDivElement, InputSelectOptionProps>(
  ({ active, id, onClick, isSelected, title, description }, ref) => {
    return (
      <StyledListChoiceWrapper $active={active}>
        <ListChoice
          id={id}
          onClick={onClick}
          ref={ref}
          tabIndex={-1}
          selected={isSelected}
          action={isSelected && <CheckCircle color="info" />}
          role="option"
          title={title}
          description={description}
        />
      </StyledListChoiceWrapper>
    );
  },
);

export default InputSelectOption;
