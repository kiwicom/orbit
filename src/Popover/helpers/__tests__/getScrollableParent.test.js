// @flow
import React from "react";
import { mount } from "enzyme";

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
    mount(<Wrapper propRef={ref} />);
    expect(getScrollableParent(ref.current) instanceof HTMLElement).toEqual(true);
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
    mount(<Wrapper propRef={ref} />);
    expect(getScrollableParent(ref.current) instanceof HTMLElement).toEqual(true);
  });
  it("To not fidn scrollabe parent", () => {
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
    mount(<Wrapper propRef={ref} />);
    expect(getScrollableParent(ref.current) instanceof HTMLElement).toEqual(false);
  });
});
