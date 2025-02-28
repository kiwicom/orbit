import React from "react";

import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Accordion, { AccordionSection } from "..";

describe("Accordion", () => {
  const expandedSection = "0X1";
  const dataTest = "Accordion";
  const id = "accordionId";
  const sectionDataTest = "AccordionSection";
  const onExpand = jest.fn();

  it("should have passed props", () => {
    render(
      <Accordion expandedSection={expandedSection} onExpand={onExpand} dataTest={dataTest} id={id}>
        <AccordionSection id="0X1" dataTest={sectionDataTest}>
          Section
        </AccordionSection>
      </Accordion>,
    );

    const el = screen.getByTestId(dataTest);
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("id", id);
    expect(screen.getByTestId(sectionDataTest)).toBeInTheDocument();
  });

  it("should render loading", () => {
    render(
      <Accordion loading>
        <AccordionSection dataTest={sectionDataTest} />
      </Accordion>,
    );

    expect(screen.getByTestId(`${sectionDataTest}Loading`)).toBeInTheDocument();
  });

  describe("AccordionSection", () => {
    it("should render passed components", () => {
      render(
        <AccordionSection
          id="0X1"
          header="Header"
          footer="Footer"
          actions="Actions"
          dataTest={sectionDataTest}
        >
          Section
        </AccordionSection>,
      );

      expect(screen.getByTestId(`${sectionDataTest}Header`)).toBeInTheDocument();
      expect(screen.getByTestId(`${sectionDataTest}Content`)).toBeInTheDocument();
      expect(screen.getByTestId(`${sectionDataTest}Footer`)).toBeInTheDocument();
    });

    describe("expandOnTileClick functionality", () => {
      const sectionId = "test";

      beforeEach(() => {
        onExpand.mockClear();
      });

      it("should expand when header is clicked and expandOnTileClick is true", async () => {
        const clickTestId = `${sectionDataTest}-click`;
        const expandHandler = onExpand;
        render(
          <Accordion onExpand={expandHandler} expandedSection={undefined}>
            <AccordionSection
              id={sectionId}
              header="Clickable Header"
              expandOnTileClick
              dataTest={clickTestId}
            />
          </Accordion>,
        );

        const header = screen.getByTestId(`${clickTestId}Header`);
        expect(header).toHaveClass("cursor-pointer");

        await waitFor(() => {
          fireEvent.click(header);
        });

        expect(expandHandler).toHaveBeenCalledWith(sectionId);
      });

      it("should not expand when header is clicked and expandOnTileClick is false", async () => {
        const noClickTestId = `${sectionDataTest}-no-click`;
        const expandHandler = onExpand;
        render(
          <Accordion onExpand={expandHandler} expandedSection={undefined}>
            <AccordionSection
              id={sectionId}
              header="Non-Clickable Header"
              dataTest={noClickTestId}
            />
          </Accordion>,
        );

        const header = screen.getByTestId(`${noClickTestId}Header`);

        await waitFor(() => {
          fireEvent.click(header);
        });

        expect(expandHandler).not.toHaveBeenCalled();
      });
    });
  });
});
