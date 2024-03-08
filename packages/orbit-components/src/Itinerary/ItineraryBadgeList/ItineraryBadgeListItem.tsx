"use client";

import * as React from "react";

import { ItemWrapper, VerticalBadge, BadgeContent } from "../../BadgeList/BadgeListItem";
import Stack from "../../Stack";
import ItineraryText from "../ItineraryText";
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
      <VerticalBadge type={type} icon={icon} />
      <BadgeContent
        style={{
          marginTop: cancelledValue ? `4px` : "",
        }}
      >
        <Stack direction="column" spacing="XXSmall">
          <ItineraryText
            withBackground={withBackground}
            type={withBackground && type !== "neutral" ? type : "secondary"}
            weight={withBackground ? "medium" : "normal"}
            size="small"
            as="span"
            strikeThrough={strikeThrough}
          >
            {children}
          </ItineraryText>
          {cancelledValue && (
            <ItineraryText type="secondary" size="small" as="span" strikeThrough weight="medium">
              {cancelledValue}
            </ItineraryText>
          )}
        </Stack>
      </BadgeContent>
    </ItemWrapper>
  );
};

export default ItineraryBadgeListItem;
