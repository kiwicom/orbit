import React from "react";

import Text from "../Text";
import Button from "../Button";
import Stepper from "../Stepper";
import Stack from "../Stack";
import type { Props } from "./types";

import Popover from ".";

const content = <Text>Popover content</Text>;

const selects = (
  <Stack direction="column">
    <Stack flex shrink align="center" justify="between">
      <Stack flex direction="column" spacing="none">
        <Text>Adult</Text>
        <Text type="secondary">11+</Text>
      </Stack>
      <Stepper minValue={0} />
    </Stack>
    <Stack flex shrink align="center" justify="between">
      <Stack flex direction="column" spacing="none">
        <Text>Child</Text>
        <Text type="secondary">2-11</Text>
      </Stack>
      <Stepper minValue={0} />
    </Stack>
  </Stack>
);

export function DefaultPopover() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Popover opened content={content}>
        <Button>open popover</Button>
      </Popover>
    </div>
  );
}

export function PopoverWithCustomWidth() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Popover opened content={content} width="400px">
        <Button>open popover</Button>
      </Popover>
    </div>
  );
}

export const PopoverPlacements = ({ placement }: { placement: Props["placement"] }) => (
  <div className="flex h-screen items-center justify-center">
    <Popover opened content={content} placement={placement}>
      <Button>open popover</Button>
    </Popover>
  </div>
);

export const PopoverWithFixedPosition = () => (
  <div className="flex h-screen items-center justify-center">
    <Popover opened content={content} fixed>
      <Button>open popover</Button>
    </Popover>
  </div>
);

export const PopoverOverlapped = () => (
  <div className="flex h-screen items-center justify-center">
    <Popover opened content={content} overlapped>
      <Button>open popover</Button>
    </Popover>
  </div>
);

export const PopoverLongContent = () => (
  <div className="flex h-screen items-center justify-center">
    <Popover opened content={<Stack>{Array.from({ length: 8 }).map(() => selects)}</Stack>}>
      <Button>open popover</Button>
    </Popover>
  </div>
);
