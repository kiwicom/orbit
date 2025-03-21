import React from "react";

import TextLink from "../TextLink";
import type { Props } from "./types";
import Check from "../icons/Check";
import { SPACINGS } from "../utils/layout/consts";

import List, { ListItem } from ".";

const ListStory = ({ size, type }: Omit<Props, "children">) => {
  return (
    <List size={size} type={type}>
      <ListItem>
        24,000 locations <TextLink href="#">around</TextLink> the globe
      </ListItem>
      <ListItem>
        Lowest price car rental in <strong>Warsaw</strong>
      </ListItem>
      <ListItem>From 3 star budget to 5 star luxury</ListItem>
    </List>
  );
};

export const ListStoryWithIconAndLabel = ({
  size = "normal",
  type = "primary",
}: Omit<Props, "children">) => {
  return (
    <List size={size} type={type}>
      <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
        24,000 locations around the globe
      </ListItem>
      <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
        24,000 locations around the globe
      </ListItem>
      <ListItem icon={<Check size="small" color="success" />}>
        24,000 locations around the globe
      </ListItem>
    </List>
  );
};

const spacingValues = [
  SPACINGS.TWO_HUNDRED,
  SPACINGS.FIVE_HUNDRED,
  SPACINGS.ONE_THOUSAND_TWO_HUNDRED,
  SPACINGS.NONE,
];

export const ListStoryWithSpacing = () => {
  return (
    <>
      {spacingValues.map(spacing => (
        <div>
          <p>{`Spacing: ${spacing}`}</p>
          <List spacing={spacing}>
            <ListItem>
              24,000 locations <TextLink href="#">around</TextLink> the globe
            </ListItem>
            <ListItem>
              Lowest price car rental in <strong>Warsaw</strong>
            </ListItem>
            <ListItem>From 3 star budget to 5 star luxury</ListItem>
          </List>
        </div>
      ))}
    </>
  );
};

export default ListStory;
