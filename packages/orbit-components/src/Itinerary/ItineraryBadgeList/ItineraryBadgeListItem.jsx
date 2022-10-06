// @flow
import * as React from "react";
import { css } from "styled-components";

import {
  StyledBadgeListItem,
  getIconColor,
  StyledVerticalBadge,
  StyledBadgeContent,
} from "../../BadgeList/BadgeListItem";
import Text from "../../Text";
import Stack from "../../Stack";
import type { Props } from "./ItineraryBadgeListItem";

const ItineraryBadgeListItem = ({
  children,
  cancelledValue,
  withBackground,
  dataTest,
  type = "secondary",
  icon,
  strikeThrough,
}: Props): React.Node => {
  return (
    <StyledBadgeListItem data-test={dataTest}>
      <StyledVerticalBadge $type={type} aria-hidden>
        {React.isValidElement(icon) && React.cloneElement(icon, { color: getIconColor(type) })}
      </StyledVerticalBadge>
      <StyledBadgeContent
        css={css`
          margin-top: 4px;
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
