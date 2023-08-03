import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import theme from "../../defaultTheme";
import ChevronForward from "../../icons/ChevronForward";
import type { Props } from "../types";
import type { SIZE_OPTIONS } from "../consts";
import TextLink from "..";

const SIZE_STYLES: { [K in SIZE_OPTIONS]: Record<"font-size", string> } = {
  small: {
    "font-size": theme.orbit.fontSizeTextSmall,
  },
  normal: {
    "font-size": theme.orbit.fontSizeTextNormal,
  },
  large: {
    "font-size": theme.orbit.fontSizeTextLarge,
  },
  extraLarge: {
    "font-size": theme.orbit.fontSizeTextExtraLarge,
  },
};

const ICON_SIZES: { [K in SIZE_OPTIONS]: Record<"height" | "width", string> } = {
  small: { width: theme.orbit.widthIconSmall, height: theme.orbit.heightIconSmall },
  normal: { width: theme.orbit.widthIconMedium, height: theme.orbit.heightIconMedium },
  large: { width: theme.orbit.widthIconLarge, height: theme.orbit.heightIconLarge },
  extraLarge: { width: theme.orbit.widthIconMedium, height: theme.orbit.heightIconMedium },
};

const title = "My text link";

describe("TextLink", () => {
  it("should have expected DOM output", () => {
    render(
      <TextLink ariaCurrent="page" id="id" href="http://#" title="title" tabIndex={-1} download>
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("A");
    expect(element).toHaveAttribute("aria-current", "page");
    expect(element).toHaveAttribute("id", "id");
    expect(element).toHaveAttribute("href", "http://#");
    expect(element).toHaveAttribute("title", "title");
    expect(element).toHaveAttribute("tabIndex", "-1");
    expect(element).toHaveAttribute("download");

    expect(element).toHaveStyle({
      "font-family": theme.orbit.fontFamily,
      display: "inline-flex",
      "align-items": "center",
      "font-weight": theme.orbit.fontWeightMedium,
      cursor: "pointer",
    });
  });

  it.each(Object.keys(SIZE_STYLES))("should have size %s", size => {
    render(
      <TextLink size={size as Props["size"]} href="http://#">
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element).toHaveStyle(SIZE_STYLES[size]);
  });

  it("can be external", () => {
    render(
      <TextLink href="http://#" external>
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(element).toHaveAttribute("target", "_blank");
  });

  it("should be focusable and have button role", () => {
    render(<TextLink>{title}</TextLink>);

    const element = screen.getByText(title);

    expect(element).toHaveAttribute("tabIndex", "0");
    expect(element).toHaveAttribute("role", "button");
  });

  it("should render as the given component", () => {
    render(
      <TextLink asComponent="span" href="http://#">
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element.tagName).toBe("SPAN");
  });

  it("should execute onClick method", () => {
    const onClick = jest.fn();
    render(<TextLink onClick={onClick}>{title}</TextLink>);

    userEvent.click(screen.getByText(title));
    expect(onClick).toHaveBeenCalled();
  });

  it("should execute onClick method once when stopPropagation", () => {
    const onClick = jest.fn();
    render(
      <TextLink onClick={onClick} stopPropagation>
        {title}
      </TextLink>,
    );
    userEvent.click(screen.getByText(title));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("can be stand alone", () => {
    render(
      <TextLink standAlone href="http://#">
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element).toHaveStyle({
      height: theme.orbit.heightButtonNormal,
    });
  });

  describe("with icon on the left side", () => {
    it.each(Object.keys(ICON_SIZES))("should have size %s", size => {
      render(
        <TextLink
          iconLeft={<ChevronForward dataTest="icon" />}
          size={size as Props["size"]}
          href="http://#"
        >
          {title}
        </TextLink>,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toHaveStyle(ICON_SIZES[size]);
    });
  });

  describe("with icon on the right side", () => {
    it.each(Object.keys(ICON_SIZES))("should have size %s", size => {
      render(
        <TextLink
          iconRight={<ChevronForward dataTest="icon" />}
          size={size as Props["size"]}
          href="http://#"
        >
          {title}
        </TextLink>,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toHaveStyle(ICON_SIZES[size]);
    });
  });
});
