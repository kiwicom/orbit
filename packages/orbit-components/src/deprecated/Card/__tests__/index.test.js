// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card, { CardHeader, CardSection, CardSectionHeader, CardSectionContent } from "..";
import SPACINGS_AFTER from "../../../common/getSpacingToken/consts";

describe("Card", () => {
  it("should have expected DOM output", () => {
    render(
      <Card dataTest="card" spaceAfter={SPACINGS_AFTER.NORMAL}>
        <CardHeader dataTest="header" title="title" subTitle="subtitle" />
        <CardSection dataTest="section">
          <CardSectionHeader>section header</CardSectionHeader>
          <CardSectionContent>section content</CardSectionContent>
        </CardSection>
      </Card>,
    );

    expect(screen.getByTestId("card")).toHaveStyle({ marginBottom: SPACINGS_AFTER.NORMAL });
    expect(screen.getByTestId("header")).toHaveTextContent("title");
    expect(screen.getByTestId("header")).toHaveTextContent("subtitle");
    expect(screen.getByTestId("section")).toHaveTextContent("section header");
    expect(screen.getByTestId("section")).toHaveTextContent("section content");
  });

  it("should trigger event handlers", () => {
    const onCloseCard = jest.fn();
    const onExpandSection = jest.fn();
    const onCloseSection = jest.fn();

    render(
      <Card closable onClose={onCloseCard}>
        <CardSection
          dataTest="section"
          expandable
          initialExpanded
          onExpand={onExpandSection}
          onClose={onCloseSection}
        >
          <CardSectionHeader>section header</CardSectionHeader>
          <CardSectionContent>section content</CardSectionContent>
        </CardSection>
      </Card>,
    );

    const cardToggleBtn = screen.getByRole("button", { name: "Close" });
    const sectionToggleBtn = screen.getByRole("button", { name: "section header" });

    userEvent.click(cardToggleBtn);
    expect(onCloseCard).toHaveBeenCalled();

    userEvent.click(sectionToggleBtn);
    expect(onCloseSection).toHaveBeenCalled();
    userEvent.click(sectionToggleBtn);
    expect(onExpandSection).toHaveBeenCalled();
  });
});
