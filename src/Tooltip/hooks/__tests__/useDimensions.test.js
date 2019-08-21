// @flow
import React, { useRef } from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import useDimensions from "../useDimensions";

const Component = ({ children }) => {
  const ref = useRef(null);
  const dimensions = useDimensions({ containerRef: ref, tooltip: ref, content: ref }, children);
  return (
    <div ref={ref}>
      {Object.keys(dimensions).map(key => (
        <div id={key} key={key}>
          {dimensions[key]}
        </div>
      ))}
    </div>
  );
};

describe("useDimensions", () => {
  beforeEach(() => {
    // $FlowExpected
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
  const eventMap = {};
  window.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
  });
  window.removeEventListener = jest.fn(event => {
    eventMap[event] = null;
  });
  const wrapper = mount(
    <Component>
      <div>content</div>
    </Component>,
  );
  it("should return values", () => {
    wrapper.setProps({ children: <div>change</div> });
    expect(wrapper.find("#containerTop").text()).toBe("16");
    expect(wrapper.find("#containerLeft").text()).toBe("28");
    expect(wrapper.find("#containerHeight").text()).toBe("32");
    expect(wrapper.find("#containerWidth").text()).toBe("400");
    expect(wrapper.find("#tooltipWidth").text()).toBe("400");
    expect(wrapper.find("#tooltipHeight").text()).toBe("32");
    expect(wrapper.find("#windowWidth").text()).toBe("1024");
    expect(wrapper.find("#windowHeight").text()).toBe("768");
    expect(wrapper.find("#contentHeight").text()).toBe("32");
  });
  it("should return values", () => {
    window.innerHeight = 700;
    window.innerWidth = 1000;
    window.scrollY = 40;
    window.scrollX = 40;
    act(() => {
      eventMap.resize();
    });
    wrapper.update();
    expect(wrapper.find("#containerTop").text()).toBe("56");
    expect(wrapper.find("#containerLeft").text()).toBe("68");
    expect(wrapper.find("#containerHeight").text()).toBe("32");
    expect(wrapper.find("#containerWidth").text()).toBe("400");
    expect(wrapper.find("#tooltipWidth").text()).toBe("400");
    expect(wrapper.find("#tooltipHeight").text()).toBe("32");
    expect(wrapper.find("#windowWidth").text()).toBe("1000");
    expect(wrapper.find("#windowHeight").text()).toBe("700");
    expect(wrapper.find("#contentHeight").text()).toBe("32");
  });
});
