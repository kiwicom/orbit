import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tabs, { TabList, Tab, TabPanels, TabPanel } from "..";

describe("Tabs", () => {
  it("should have expected DOM output", () => {
    const onChange = jest.fn();

    render(
      <Tabs dataTest="tabs" onChange={onChange}>
        <TabList dataTest="tablist">
          <Tab dataTest="first-tab">Tab 1</Tab>
          <Tab dataTest="second-tab">Tab 2</Tab>
        </TabList>
        <TabPanels dataTest="panel">
          <TabPanel dataTest="panel1">1</TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    expect(screen.getByTestId("first-tab")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByTestId("tabs")).toBeInTheDocument();
    expect(screen.getByTestId("tablist")).toBeInTheDocument();
    expect(screen.getByTestId("panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel1")).toBeInTheDocument();
    userEvent.click(screen.getByText("Tab 2"));
    expect(onChange).toHaveBeenCalled();
    expect(screen.getByTestId("first-tab")).toHaveAttribute("aria-selected", "false");
    expect(screen.getByTestId("second-tab")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getByRole("tab")).toBeInTheDocument();
  });
});
