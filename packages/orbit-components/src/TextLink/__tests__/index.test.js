// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextLink from "../index";
import ChevronRight from "../../icons/ChevronRight";

const title = "My text link";
const dataTest = "test";

describe("#TextLink", () => {
  it("should be focusable and have button role", () => {
    render(<TextLink asComponent="button">{title}</TextLink>);
    userEvent.tab();
    expect(screen.getByText(title)).toHaveFocus();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should execute onClick method", () => {
    const onClick = jest.fn();
    render(<TextLink onClick={onClick}>{title}</TextLink>);
    userEvent.click(screen.getByText(title));
    expect(onClick).toHaveBeenCalled();
  });

  it("should render with props", () => {
    const dataTestIcon = "testIcon";
    const tabIndex = "-1";
    const href = "https://kiwi.com";
    render(
      <TextLink
        href={href}
        icon={<ChevronRight dataTest={dataTestIcon} />}
        tabIndex={tabIndex}
        dataTest={dataTest}
      >
        {title}
      </TextLink>,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title).closest("a")).toHaveAttribute("href", href);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIcon)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).not.toHaveAttribute("role");
  });
  it("should have external and rel attributes", () => {
    const rel = "nofollow";
    render(
      <TextLink rel={rel} external>
        {title}
      </TextLink>,
    );
    expect(screen.getByText(title).closest("a")).toHaveAttribute(
      "rel",
      expect.stringContaining("noopener"),
    );
    expect(screen.getByText(title).closest("a")).toHaveAttribute(
      "rel",
      expect.stringContaining("noreferrer"),
    );
    expect(screen.getByText(title).closest("a")).toHaveAttribute(
      "rel",
      expect.stringContaining(rel),
    );
    expect(screen.getByText(title).closest("a")).toHaveAttribute("target", "_blank");
  });
});
