// @flow
import * as React from "react";
import { render } from "@testing-library/react";

import getScrollableParent from "../getScrollableParent";

describe("getScrollableParent", () => {
  it("To find scrollabe parent with auto", () => {
    const Wrapper = ({ propRef }) => {
      return (
        <div style={{ overflow: "auto" }}>
          <div>
            <div ref={propRef} />
          </div>
        </div>
      );
    };
    const ref = React.createRef();
    render(<Wrapper propRef={ref} />);
    expect(getScrollableParent(ref.current)).toBeInstanceOf(HTMLDivElement);
  });
  it("To find scrollabe parent with scroll", () => {
    const Wrapper = ({ propRef }) => {
      return (
        <div style={{ overflow: "scroll" }}>
          <div>
            <div ref={propRef} />
          </div>
        </div>
      );
    };
    const ref = React.createRef();
    render(<Wrapper propRef={ref} />);
    expect(getScrollableParent(ref.current)).toBeInstanceOf(HTMLDivElement);
  });
  it("To not find scrollabe parent", () => {
    const Wrapper = ({ propRef }) => {
      return (
        <div>
          <div>
            <div ref={propRef} />
          </div>
        </div>
      );
    };
    const ref = React.createRef();
    render(<Wrapper propRef={ref} />);
    expect(getScrollableParent(ref.current)).not.toBeInstanceOf(HTMLDivElement);
  });
});
