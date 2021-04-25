// @flow
import * as React from "react";

import Button from "../../Button";
import Popover from "../index";
import Stack from "../../Stack";
import Stepper from "../../Stepper";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);
    return (
      <Stack>
        <Popover
          content={
            <Stack>
              <Stack align="center">
                <Stack spacing="none">
                  <Text>Adult</Text>
                  <Text type="secondary">12+</Text>
                </Stack>
                <Stepper
                  minValue={1}
                  defaultValue={adults}
                  onChange={newAdults => setAdults(newAdults)}
                />
              </Stack>
              <Stack align="center">
                <Stack spacing="none">
                  <Text>Child</Text>
                  <Text type="secondary">0-11</Text>
                </Stack>
                <Stepper
                  minValue={0}
                  defaultValue={children}
                  onChange={newChildren => setChildren(newChildren)}
                />
              </Stack>
            </Stack>
          }
        >
          <Button
            type="secondary"
            title="Add or remove passengers"
            iconLeft={<Icons.Passengers ariaLabel="Passengers" />}
            iconRight={<Icons.ChevronDown />}
          >
            {adults + children}
          </Button>
        </Popover>
      </Stack>
    );
  },
  info: {
    title: "Popover to select passengers",
    description: "Click the button to see extra options not available at first glance.",
  },
};
