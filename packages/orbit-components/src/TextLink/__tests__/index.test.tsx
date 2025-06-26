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
  small: { width: theme.orbit.iconSmallSize, height: theme.orbit.iconSmallSize },
  normal: { width: theme.orbit.iconMediumSize, height: theme.orbit.iconMediumSize },
  large: { width: theme.orbit.iconLargeSize, height: theme.orbit.iconLargeSize },
  extraLarge: { width: theme.orbit.iconMediumSize, height: theme.orbit.iconMediumSize },
};

const title = "My text link";

describe("TextLink", () => {
  const user = userEvent.setup();

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

  it("should respect custom tabIndex when provided", () => {
    const onClick = jest.fn();
    render(
      <TextLink onClick={onClick} tabIndex={-1}>
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element).toHaveAttribute("tabIndex", "-1");
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

  it("should execute onClick method", async () => {
    const onClick = jest.fn();
    render(<TextLink onClick={onClick}>{title}</TextLink>);
    await user.click(screen.getByText(title));
    expect(onClick).toHaveBeenCalled();
  });

  it("should execute onClick method once when stopPropagation", async () => {
    const onClick = jest.fn();
    render(
      <TextLink onClick={onClick} stopPropagation>
        {title}
      </TextLink>,
    );
    await user.click(screen.getByText(title));
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
      height: theme.orbit.formBoxNormalHeight,
    });
  });

  describe("with icon on the left side", () => {
    it.each(Object.keys(ICON_SIZES))("should have size %s", size => {
      render(
        <TextLink
          iconLeft={<ChevronForward dataTest="icon" ariaHidden />}
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
          iconRight={<ChevronForward dataTest="icon" ariaHidden />}
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

  it("should render as button when no href is provided", () => {
    const onClick = jest.fn();
    render(<TextLink onClick={onClick}>{title}</TextLink>);

    const element = screen.getByText(title);

    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveAttribute("type", "button");
    expect(element).toHaveAttribute("role", "button");
  });

  it("should render as anchor when href is provided", () => {
    const onClick = jest.fn();
    render(
      <TextLink href="https://example.com" onClick={onClick}>
        {title}
      </TextLink>,
    );

    const element = screen.getByText(title);

    expect(element.tagName).toBe("A");
    expect(element).toHaveAttribute("href", "https://example.com");
    expect(element).not.toHaveAttribute("type");
    expect(element).not.toHaveAttribute("role");
  });

  it("should forward ref to the underlying element", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <TextLink ref={ref} href="https://example.com">
        {title}
      </TextLink>,
    );

    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    expect(ref.current?.textContent).toBe(title);
  });

  it("should forward ref to button element when no href is provided", () => {
    const ref = React.createRef<HTMLButtonElement>();
    const onClick = jest.fn();
    render(
      <TextLink ref={ref} onClick={onClick}>
        {title}
      </TextLink>,
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe(title);
  });
});
