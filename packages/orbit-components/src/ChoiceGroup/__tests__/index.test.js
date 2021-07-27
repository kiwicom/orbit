// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LABEL_ELEMENTS, LABEL_SIZES } from "../consts";
import Radio from "../../Radio";
import Checkbox from "../../Checkbox";
import ChoiceGroup from "..";

describe("ChoiceGroup", () => {
  it("radio", () => {
    const onChange = jest.fn();
    render(
      <ChoiceGroup
        dataTest="test"
        label="Label"
        onChange={onChange}
        labelSize={LABEL_SIZES.LARGE}
        labelAs={LABEL_ELEMENTS.H5}
      >
        <Radio value="option" label="Option" />
      </ChoiceGroup>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
    userEvent.click(screen.getByRole("radio", { name: "Option" }));
    expect(onChange).toHaveBeenCalled();
  });

  it("filter", () => {
    const onOnlySelection = jest.fn();
    render(
      <ChoiceGroup
        label="Label"
        labelSize={LABEL_SIZES.LARGE}
        labelAs={LABEL_ELEMENTS.H5}
        filter
        onChange={() => {}}
        onOnlySelection={onOnlySelection}
        onlySelectionText="Only"
      >
        <Checkbox value="option" label="Option" />
      </ChoiceGroup>,
    );
    userEvent.click(screen.getByText("Only"));
    expect(onOnlySelection).toHaveBeenCalled();
  });

  it("render prop", () => {
    const onChange = jest.fn();
    render(
      <ChoiceGroup onChange={onChange}>
        {({ Container, Item, spacing }) => (
          <Container style={{ display: "flex", flexDirection: "column", gap: spacing }}>
            <Item>
              <Radio value="option" label="Option" />
            </Item>
          </Container>
        )}
      </ChoiceGroup>,
    );
    userEvent.click(screen.getByRole("radio", { name: "Option" }));
    expect(onChange).toHaveBeenCalled();
  });

  it("should have error", () => {
    render(
      <ChoiceGroup dataTest="test" onChange={() => {}} labelSize={LABEL_SIZES.LARGE} error="kek">
        <Radio value="option" label="Option" />
      </ChoiceGroup>,
    );

    expect(screen.getByText("kek")).toBeInTheDocument();
  });
});
