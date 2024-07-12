import React from "react";

import Text from "../Text";
import List, { ListItem } from "../List";

import Coupon from ".";

export default {
  title: "Coupon",
};

export const Default = ({ content }) => {
  return (
    <List>
      <ListItem>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer <Coupon>{content}</Coupon> elit. Proin pede
          metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
        </Text>
      </ListItem>
    </List>
  );
};

Default.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Default.args = {
  content: "PROMOTIONCODE",
};

export const Playground = ({ dataTest, id, content }) => {
  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetuer{" "}
      <Coupon dataTest={dataTest} id={id}>
        {content}
      </Coupon>{" "}
      elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
    </Text>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  dataTest: "test",
  id: "couponId",
  content: "CODE",
};
