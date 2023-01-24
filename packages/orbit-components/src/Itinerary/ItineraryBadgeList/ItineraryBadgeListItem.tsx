import * as React from "react";
import { css } from "styled-components";

import {
  StyledBadgeListItem,
  getIconColor,
  StyledVerticalBadge,
  StyledBadgeContent,
} from "../../BadgeList/BadgeListItem";
import Stack from "../../Stack";
// TODO: remove after designers will resolve status colors
// https://skypicker.slack.com/archives/GSGN9BN6Q/p1674568716519889
import Text from "../ItineraryTemporaryText";
import type { BadgeListItem as Props } from "./types";

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
          <Text
            withBackground={withBackground}
            type={withBackground && type !== "neutral" ? type : "secondary"}
            weight={withBackground ? "medium" : "normal"}
            size="small"
            as="span"
            strikeThrough={strikeThrough}
          >
            {children}
          </Text>
          {cancelledValue && (
            <Text type="secondary" size="small" as="span" strikeThrough weight="medium">
              {cancelledValue}
            </Text>
          )}
        </Stack>
      </StyledBadgeContent>
    </StyledBadgeListItem>
  );
};

export default ItineraryBadgeListItem;
