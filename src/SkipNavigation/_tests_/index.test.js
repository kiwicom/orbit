// @flow
import * as React from "react";
import { shallow } from "enzyme";

import SkipNavigation from "..";

describe("SkipNavigation", () => {
  const actions = [
    {
      link: "https://www.kiwi.com/cz/pages/content/terms",
      name: "Got to terms and condition",
    },
    {
      name: "Add baggage",
    },
    {
      name: "Reguest refund",
    },
  ];
  const feedbackUrl = "https://www.kiwi.com/en/";

  const component = shallow(<SkipNavigation actions={actions} feedbackUrl={feedbackUrl} />);

  it("Should pass props", () => {
    expect(component.find("Button").exists()).toEqual(true);
    expect(component.find("Select").exists()).toEqual(true);
  });
});
