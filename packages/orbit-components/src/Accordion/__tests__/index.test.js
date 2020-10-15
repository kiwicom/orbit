// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Accordion, { AccordionSection } from "../index";

const expandedSection = "0X1";
const dataTest = "test";
const sectionDataTest = "test-section";

describe(`Accordion`, () => {
  beforeEach(() => {
    const onExpand = jest.fn();

    render(
      <Accordion expandedSection={expandedSection} onExpand={onExpand} dataTest={dataTest}>
        <AccordionSection
          header="Header"
          footer="Footer"
          actions="Actions"
          dataTest={sectionDataTest}
          id="0X1"
        >
          Section
        </AccordionSection>
      </Accordion>,
    );
  });

  it("should have passed props", () => {
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId(sectionDataTest)).toBeInTheDocument();
  });
});
