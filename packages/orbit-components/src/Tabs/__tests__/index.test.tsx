import * as React from "react";
import userEvent from "@testing-library/user-event";

import { act, render, screen } from "../../test-utils";
import Tabs, { TabList, Tab, TabPanels, TabPanel } from "..";

describe("Tabs", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
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

    await act(() => user.click(screen.getByText("Tab 2")));

    expect(onChange).toHaveBeenCalled();
    expect(screen.getByTestId("first-tab")).toHaveAttribute("aria-selected", "false");
    expect(screen.getByTestId("second-tab")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
  });

  it("should be controlled", async () => {
    const onChange = jest.fn();
    const onClick = jest.fn();

    const TabComponent = () => {
      const [active, setActive] = React.useState(0);

      return (
        <Tabs dataTest="tabs" onChange={onChange}>
          <TabList dataTest="tablist">
            <Tab
              dataTest="first-tab"
              onClick={() => {
                if (onClick) onClick();
                setActive(0);
              }}
              active={active === 0}
            >
              first tab
            </Tab>
            <Tab
              dataTest="second-tab"
              onClick={() => {
                if (onClick) onClick();
                setActive(1);
              }}
              active={active === 1}
            >
              second tab
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel active={active === 0}>1</TabPanel>
            <TabPanel active={active === 1}>2</TabPanel>
          </TabPanels>
        </Tabs>
      );
    };

    render(<TabComponent />);

    expect(screen.getByTestId("first-tab")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("1")).toBeInTheDocument();
    await act(() => user.click(screen.getByText("second tab")));
    expect(onClick).toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByTestId("second-tab")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should be defaultSelected", () => {
    render(
      <Tabs defaultSelected={1}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab dataTest="2-tab">Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>,
    );

    expect(screen.getByTestId("2-tab")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should be disabled", async () => {
    const onClick = jest.fn();
    render(
      <Tab disabled onClick={onClick}>
        1
      </Tab>,
    );
    await user.click(screen.getByRole("tab"));
    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole("tab")).toHaveAttribute("aria-disabled", "true");
  });
});
