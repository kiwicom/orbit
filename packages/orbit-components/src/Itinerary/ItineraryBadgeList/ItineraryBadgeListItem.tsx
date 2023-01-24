import * as React from "react";
import styled, { css } from "styled-components";

import {
  StyledBadgeListItem,
  getIconColor,
  StyledVerticalBadge,
  StyledBadgeContent,
} from "../../BadgeList/BadgeListItem";
import type { Props as TextProps } from "../../Text/types";
import { StyledText } from "../../Text";
import Stack from "../../Stack";
import type { BadgeListItem as Props } from "./types";

const getColorType = ({ type }: { type: Props["type"] }) => ({ theme }) => {
  if (type === "info") return theme.orbit.paletteBlueDark;
  if (type === "success") return theme.orbit.paletteGreenDark;
  if (type === "warning") return theme.orbit.paletteOrangeDark;
  if (type === "critical") return theme.orbit.paletteRedDark;

  return theme.orbit.colorTextSecondary;
};

export const StyledTemporaryText = styled(StyledText)<TextProps>`
  color: ${getColorType};
`;

const ItineraryBadgeListItem = ({
  children,
  cancelledValue,
  withBackground,
  dataTest,
  type = "neutral",
  icon,
  strikeThrough,
}: Props) => {
  return (
    <StyledBadgeListItem data-test={dataTest}>
      <StyledVerticalBadge $type={type} aria-hidden>
        {/* @ts-expect-error TODO */}
        {React.isValidElement(icon) && React.cloneElement(icon, { color: getIconColor(type) })}
      </StyledVerticalBadge>
      <StyledBadgeContent
        css={css`
          margin-top: ${cancelledValue ? `4px` : ""};
        `}
      >
        <Stack direction="column" spacing="XXSmall">
          <StyledTemporaryText
            withBackground={withBackground}
            type={withBackground && type !== "neutral" ? type : "secondary"}
            weight={withBackground ? "medium" : "normal"}
            size="small"
            as="span"
            strikeThrough={strikeThrough}
          >
            {children}
          </StyledTemporaryText>
          {cancelledValue && (
            <StyledTemporaryText
              type="secondary"
              size="small"
              as="span"
              strikeThrough
              weight="medium"
            >
              {cancelledValue}
            </StyledTemporaryText>
          )}
        </Stack>
      </StyledBadgeContent>
    </StyledBadgeListItem>
  );
};

export default ItineraryBadgeListItem;
