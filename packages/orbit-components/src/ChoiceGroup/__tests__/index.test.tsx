import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LABEL_ELEMENTS, LABEL_SIZES } from "../consts";
import Radio from "../../Radio";
import Checkbox from "../../Checkbox";
import ChoiceGroup from "..";

describe("ChoiceGroup", () => {
  const user = userEvent.setup();

  it("radio", async () => {
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
    await user.click(screen.getByRole("radio", { name: "Option" }));
    expect(onChange).toHaveBeenCalled();
  });

  it("filter", async () => {
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
    await user.click(screen.getByText("Only"));
    expect(onOnlySelection).toHaveBeenCalled();
  });

  it("render prop", async () => {
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
    await user.click(screen.getByRole("radio", { name: "Option" }));
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

  it("should have ref", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <ChoiceGroup ref={ref} onChange={() => {}}>
        <Radio value="option" label="Option" />
      </ChoiceGroup>,
    );

    expect(ref.current).toBeDefined();
  });
});
