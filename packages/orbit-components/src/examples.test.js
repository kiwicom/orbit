// @flow
import * as React from "react";
import { shallow } from "enzyme";

import * as examples from "./examples";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("GitHub examples", () => {
  it.each(Object.keys(examples).map(k => [examples[k].info.title, examples[k].Example]))(
    "Rendering example %p",
    (name, Example) => {
      const wrapper = shallow(<Example />);
      expect(wrapper).toHaveLength(1);
    },
  );
});
