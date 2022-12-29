import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextLink from "..";
import ChevronRight from "../../icons/ChevronRight";
import defaultTheme from "../../defaultTheme";

const title = "My text link";
const dataTest = "test";

describe("#TextLink", () => {
  const user = userEvent.setup();

  it("should be focusable and have button role", async () => {
    render(<TextLink asComponent="button">{title}</TextLink>);
    await user.tab();
    expect(screen.getByText(title)).toHaveFocus();
    expect(screen.getByRole("button")).toBeInTheDocument();
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

  it("should render with props", () => {
    const dataTestLeftIcon = "leftIcon";
    const dataTestRightIcon = "rightIcon";
    const tabIndex = "-1";
    const href = "https://kiwi.com";
    render(
      <TextLink
        href={href}
        iconRight={<ChevronRight dataTest={dataTestLeftIcon} />}
        iconLeft={<ChevronRight dataTest={dataTestRightIcon} />}
        tabIndex={tabIndex}
        dataTest={dataTest}
      >
        {title}
      </TextLink>,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", href);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestLeftIcon)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestRightIcon)).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
  it("should have external and rel attributes", () => {
    const rel = "nofollow";
    const href = "https://kiwi.com";
    render(
      <TextLink rel={rel} external href={href}>
        {title}
      </TextLink>,
    );
    const link = screen.getByText(title).closest("a");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(link).toHaveAttribute("rel", expect.stringContaining(rel));
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should no have underline and height for a11y", () => {
    render(
      <TextLink noUnderline standAlone>
        {title}
      </TextLink>,
    );
    expect(screen.getByRole("button")).toHaveStyle({
      textDecoration: "none",
      height: defaultTheme.orbit.heightButtonNormal,
    });
  });
});
