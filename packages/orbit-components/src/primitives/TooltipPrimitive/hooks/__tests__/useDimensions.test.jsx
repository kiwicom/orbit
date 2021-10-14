// @flow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";

import useDimensions from "../useDimensions";
import Button from "../../../../Button";

const { useRef } = React;

const Component = ({ children, parent }) => {
  const ref = useRef(null);
  const dimensions = useDimensions(
    { containerRef: ref, tooltip: ref, content: ref },
    children,
    parent,
  );

  return (
    <div ref={ref}>
      {Object.keys(dimensions).map(key => (
        <div id={key} data-test={key} key={key}>
          {dimensions[key]}
        </div>
      ))}
    </div>
  );
};

describe("useDimensions", () => {
  beforeEach(() => {
    // $FlowExpectedError
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 400,
        height: 32,
        top: 16,
        left: 28,
        bottom: 45,
        right: 428,
      };
    });
  });

  it("should return values", () => {
    render(
      <Component parent={<Button>Hello world</Button>}>
        <div>content</div>
      </Component>,
    );

    expect(screen.getByTestId("containerTop")).toHaveTextContent("16");
    expect(screen.getByTestId("containerLeft")).toHaveTextContent("28");
    expect(screen.getByTestId("containerHeight")).toHaveTextContent("32");
    expect(screen.getByTestId("containerWidth")).toHaveTextContent("400");
    expect(screen.getByTestId("tooltipWidth")).toHaveTextContent("400");
    expect(screen.getByTestId("tooltipHeight")).toHaveTextContent("32");
    expect(screen.getByTestId("windowWidth")).toHaveTextContent("1024");
    expect(screen.getByTestId("windowHeight")).toHaveTextContent("768");
    expect(screen.getByTestId("contentHeight")).toHaveTextContent("32");
  });
  it("should return values after resize", () => {
    act(() => {
      window.innerHeight = 700;
      window.innerWidth = 1000;
      window.scrollY = 40;
      window.scrollX = 40;
    });

    render(
      <Component parent={<Button>Hello world</Button>}>
        <div>content</div>
      </Component>,
    );

    expect(screen.getByTestId("containerTop")).toHaveTextContent("56");
    expect(screen.getByTestId("containerLeft")).toHaveTextContent("68");
    expect(screen.getByTestId("containerHeight")).toHaveTextContent("32");
    expect(screen.getByTestId("containerWidth")).toHaveTextContent("400");
    expect(screen.getByTestId("tooltipWidth")).toHaveTextContent("400");
    expect(screen.getByTestId("tooltipHeight")).toHaveTextContent("32");
    expect(screen.getByTestId("windowWidth")).toHaveTextContent("1000");
    expect(screen.getByTestId("windowHeight")).toHaveTextContent("700");
    expect(screen.getByTestId("contentHeight")).toHaveTextContent("32");
  });
});
