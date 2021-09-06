import React from "react";
import { Button, Stack, Popover, Stepper, Text } from "@kiwicom/orbit-components";
import { ChevronDown, Passengers } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);
    return (
      <Stack>
        <Popover
          renderInPortal={false}
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
            iconLeft={<Passengers ariaLabel="Passengers" />}
            iconRight={<ChevronDown />}
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
