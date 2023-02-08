import * as React from "react";

import {
  StyledChoiceTile,
  StyledChoiceTileContent,
  StyledChoiceTileHeading,
  StyledChoiceTileLabel,
  StyledInputWrapper,
} from "./styled";
import type { Props } from "./types";
import Stack from "../Stack";
import Text from "../Text";
import useMediaQuery from "../hooks/useMediaQuery";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

const InputContent = ({ fullWidth, selected, label, type }: Props & { fullWidth?: boolean }) => {
  return (
    <StyledInputWrapper fullWidth={fullWidth}>
      <StyledChoiceTileLabel selected={selected}>{label}</StyledChoiceTileLabel>
      {type === "radio" ? (
        <Radio readOnly tabIndex={-1} checked={selected} />
      ) : (
        <Checkbox readOnly tabIndex={-1} checked={selected} />
      )}
    </StyledInputWrapper>
  );
};

const ChoiceTile = ({
  children,
  icon,
  title,
  description,
  inline,
  label,
  type,
  selected,
  onClick,
  dataTest,
  id,
}: Props) => {
  const { isTablet } = useMediaQuery();
  const onlyCustomContent = !icon && !title && !description && !!children;

  return (
    <StyledChoiceTile
      selected={selected}
      onClick={onClick}
      tabIndex={0}
      data-test={dataTest}
      id={id}
    >
      <Stack inline spacing="medium" align="center">
        <Stack direction="column" spacing="XXSmall" shrink>
          {(title || icon) && (
            <Stack inline spacing="XSmall" align="center">
              {icon}
              <StyledChoiceTileHeading>{title}</StyledChoiceTileHeading>
              {inline && isTablet && description && <Text type="secondary">{description}</Text>}
            </Stack>
          )}
          {(!isTablet || !inline) && description && <Text type="secondary">{description}</Text>}
        </Stack>
        {isTablet && <InputContent selected={selected} label={label} type={type} />}
      </Stack>
      {children && (
        <StyledChoiceTileContent onlyCustomContent={onlyCustomContent}>
          {children}
        </StyledChoiceTileContent>
      )}
      {!isTablet && (
        <InputContent
          fullWidth={!onlyCustomContent}
          selected={selected}
          label={label}
          type={type}
        />
      )}
    </StyledChoiceTile>
  );
};

export default ChoiceTile;
