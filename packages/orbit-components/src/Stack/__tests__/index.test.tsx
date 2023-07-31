import React from "react";

import { render, screen } from "../../test-utils";
import Stack from "..";
import InputField from "../../InputField";
import Button from "../../Button";
import { DIRECTION } from "../../common/tailwind/direction";
import type { Justify, Align } from "../types";

describe("Stack", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";

    render(
      <Stack flex dataTest={dataTest}>
        <InputField type="password" label="Password" help="You need some help!" />
        <Button>Sign In</Button>
      </Stack>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();

    expect(screen.getByTestId(dataTest)).toHaveStyle(`flex-direction: row`);
    expect(screen.getByTestId(dataTest)).toHaveStyle(`flex-wrap: nowrap`);
    expect(screen.getByTestId(dataTest)).toHaveStyle(`flex-shrink: 0`);
    expect(screen.getByTestId(dataTest)).toHaveStyle(`flex-grow: 1`);
    expect(screen.getByTestId(dataTest)).toHaveStyle(`justify-content: flex-start`);
    expect(screen.getByTestId(dataTest)).toHaveStyle(`align-items: flex-start`);
  });

  it("should be inline", () => {
    render(
      <Stack inline dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle(`display: inline-flex`);
  });

  it("should turn off grow", () => {
    render(
      <Stack grow={false} dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle(`flex-grow: 0`);
  });

  it("should turn on shrink", () => {
    render(
      <Stack shrink dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({ flexShrink: 1 });
  });

  it.each(Object.entries(DIRECTION))("should have direction %s", (_, direction) => {
    render(
      <Stack flex direction={direction} dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle(`flex-direction: ${direction}`);
  });

  it.each([
    ["start", "flex-start"],
    ["end", "flex-end"],
    ["between", "space-between"],
    ["center", "center"],
    ["around", "space-around"],
  ])("should change justify %s", (justify, expected) => {
    render(
      <Stack flex justify={justify as Justify} dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle(`justify-content: ${expected}`);
  });

  it.each([
    ["start", "flex-start"],
    ["end", "flex-end"],
    ["center", "center"],
    ["stretch", "stretch"],
    ["baseline", "baseline"],
  ])("should change align %s", (align, expected) => {
    render(
      <Stack flex align={align as Align} direction="column" dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle(`align-items: ${expected}`);
  });
});
