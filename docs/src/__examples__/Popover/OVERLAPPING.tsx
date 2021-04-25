import * as React from "react";
import { Button, Stack, Text, Popover, Stepper } from "@kiwicom/orbit-components";
import { Passengers } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);
    return (
      <Stack>
        <Popover
          overlapped
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
          >
            {adults + children}
          </Button>
        </Popover>
      </Stack>
    );
  },
  info: {
    title: "Overlapping popover",
    description: "To have the popover cover its trigger, pass it the overlapped prop.",
  },
};
