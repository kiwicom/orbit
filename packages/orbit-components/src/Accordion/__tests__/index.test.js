// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Accordion, { AccordionSection } from "../index";

describe(`Accordion`, () => {
  const expandedSection = "0X1";
  const dataTest = "Accordion";
  const sectionDataTest = "AccordionSection";
  const onExpand = jest.fn();

  it("should have passed props", () => {
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

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId(sectionDataTest)).toBeInTheDocument();
  });

  it("should have passed props", () => {
    render(
      <Accordion loading>
        <AccordionSection dataTest={sectionDataTest} />
      </Accordion>,
    );

    expect(screen.getByTestId(`${sectionDataTest}Loading`)).toBeInTheDocument();
  });
});
