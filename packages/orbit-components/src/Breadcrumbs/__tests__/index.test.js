// @flow
import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Breadcrumbs from "../index";
import BreadcrumbsItem from "../BreadcrumbsItem";

// jsdom doesn't support @media queries, so for <Hide> the computed value of
// "display" is "none", which @testing-library/react (impressively) detects as
// inaccessible, so we're replacing <Hide> with a dummy component
jest.mock("../../Hide", () => ({ children }) => children);

describe("Breadcrumbs", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const onGoBack = jest.fn();

    render(
      <Breadcrumbs dataTest={dataTest} onGoBack={onGoBack}>
        <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
      </Breadcrumbs>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByLabelText("Breadcrumb")).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("list")).toHaveAttribute(
      "itemType",
      expect.stringContaining("BreadcrumbList"),
    );

    expect(screen.getByRole("listitem")).toHaveAttribute("aria-current", "page");
    expect(document.querySelector("meta")).toHaveAttribute("content", "1");

    screen.getAllByRole("button", { name: "Back" }).forEach(link => {
      userEvent.click(link);
    });

    expect(onGoBack).toHaveBeenCalledTimes(2);
  });

  it("should render as a link when backHref is passed", () => {
    render(
      <Breadcrumbs backHref="https://orbit.kiwi" dataTest="kek">
        <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
      </Breadcrumbs>,
    );

    screen.getAllByRole("link", { name: "Back" }).forEach(backLink => {
      expect(backLink).toHaveAttribute("href", "https://orbit.kiwi");
    });
  });

  it("back link should have take parent link, if the onBackHref is not passed", () => {
    render(
      <Breadcrumbs dataTest="kek">
        <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
        <BreadcrumbsItem href="https://wikipedia.org" onClick={jest.fn()}>
          Wikipedia.org
        </BreadcrumbsItem>
        <BreadcrumbsItem href="https://reactjs.org">Reactjs.org</BreadcrumbsItem>
      </Breadcrumbs>,
    );

    expect(screen.getByRole("link", { name: "Back" })).toHaveAttribute(
      "href",
      "https://wikipedia.org",
    );
  });
});

describe("Breadcrumbs item", () => {
  const onClick = jest.fn();
  const url = "https://kiwi.com";
  const title = "Kiwi.com";
  const dataTest = "test";
  const id = "id";
  beforeEach(() => {
    render(
      <BreadcrumbsItem
        id={id}
        href={url}
        onClick={onClick}
        dataTest={dataTest}
        active
        contentKey={2}
      >
        {title}
      </BreadcrumbsItem>,
    );
  });
  it("li contains props", () => {
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toHaveAttribute("itemprop", "itemListElement");
    expect(screen.getByRole("listitem")).toHaveAttribute(
      "itemtype",
      expect.stringContaining("ListItem"),
    );
    expect(screen.getByRole("listitem")).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link")).toHaveAttribute("itemid", id);
  });
  it("anchor contains props", () => {
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
    expect(screen.getByRole("link")).toHaveAttribute("itemprop", "item");
    expect(screen.getByRole("link")).toHaveAttribute(
      "itemtype",
      expect.stringContaining("WebPage"),
    );
    expect(screen.getByText(title)).toHaveAttribute("itemprop", "name");
  });
  it("meta contains props", () => {
    expect(document.querySelector("meta")).toHaveAttribute("itemprop", "position");
    expect(document.querySelector("meta")).toHaveAttribute("content", "2");
  });
  it("itemid defaults to href when no id attribute", () => {
    cleanup();
    render(
      <BreadcrumbsItem href={url} onClick={onClick} dataTest={dataTest} active contentKey={2}>
        {title}
      </BreadcrumbsItem>,
    );

    expect(screen.getByRole("link")).toHaveAttribute("itemid", url);
  });
});
