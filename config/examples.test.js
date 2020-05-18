// @flow
import * as React from "react";
import { shallow } from "enzyme";

import * as examples from "./examples";

describe("GitHub examples", () => {
  test.each(Object.keys(examples).map(k => [examples[k].info.title, examples[k].Example]))(
    "Rendering example %p",
    (name, Example) => {
      const wrapper = shallow(<Example />);
      expect(wrapper).toHaveLength(1);
    },
  );
});
