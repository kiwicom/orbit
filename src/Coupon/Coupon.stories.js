// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import Text from "../Text";
import List, { ListItem } from "../List";
import { SIZES } from "../List/consts";

import Coupon from "./index";

storiesOf("Coupon", module)
  .add(
    "Default",
    () => {
      const content = text("content", "PROMOTIONCODE");
      const size = select("Size", Object.values(SIZES), SIZES.SMALL);
      return (
        <List size={size}>
          <ListItem>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer <Coupon>{content}</Coupon> elit. Proin pede
              metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
            </Text>
          </ListItem>
        </List>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const dataTest = text("dataTest", "test");
      const content = text("content", "CODE");

      return (
        <Text>
          Lorem ipsum dolor sit amet, consectetuer <Coupon dataTest={dataTest}>{content}</Coupon>{" "}
          elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
        </Text>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
