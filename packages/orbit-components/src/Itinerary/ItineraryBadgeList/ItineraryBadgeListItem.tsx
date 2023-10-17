"use client";

import * as React from "react";

import {
  ItemWrapper,
  getIconColor,
  VerticalBadge,
  BadgeContent,
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
    <ItemWrapper dataTest={dataTest}>
      <VerticalBadge type={type}>
        {/* @ts-expect-error TODO */}
        {React.isValidElement(icon) && React.cloneElement(icon, { color: getIconColor(type) })}
      </VerticalBadge>
      <BadgeContent
        style={{
          marginTop: cancelledValue ? `4px` : "",
        }}
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
      </BadgeContent>
    </ItemWrapper>
  );
};

export default ItineraryBadgeListItem;
