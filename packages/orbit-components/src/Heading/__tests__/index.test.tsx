import * as React from "react";

import { render, screen, spaceAfterTokens } from "../../test-utils";
import type { SpaceAfterSizes } from "../../common/types";
import Heading from "..";
import { ELEMENT_OPTIONS, TYPE_OPTIONS, ALIGN } from "../consts";

describe("Heading", () => {
  it("should have expected DOM output", () => {
    render(
      <Heading as={ELEMENT_OPTIONS.H2} type={TYPE_OPTIONS.TITLE1} dataTest="test" id="id">
        My lovely heading
      </Heading>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const heading = screen.getByRole("heading", { name: "My lovely heading" });
    expect(heading.tagName.toLowerCase()).toBe("h2");
    expect(heading).toHaveAttribute("id", "id");
  });

  it("renders correct aria-level", () => {
    render(
      <Heading role="heading" level={2}>
        Title
      </Heading>,
    );
    expect(screen.getByRole("heading")).toHaveAttribute("aria-level", "2");
  });

  it.each(Object.values(ALIGN))("should have expected styles from align %s", align => {
    render(
      <Heading dataTest={align} align={align}>
        Title
      </Heading>,
    );
    expect(screen.getByTestId(align)).toHaveStyle(`text-align: ${align}`);
  });

  it.each(Object.keys(spaceAfterTokens))(
    "should have expected styles from spaceAfter %s",
    space => {
      render(
        <Heading dataTest={space} spaceAfter={space as SpaceAfterSizes}>
          Title
        </Heading>,
      );
      expect(screen.getByTestId(space)).toHaveStyle(`margin-bottom: ${spaceAfterTokens[space]}`);
    },
  );
});
