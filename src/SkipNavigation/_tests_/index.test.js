// @flow
import * as React from "react";
import { mount } from "enzyme";

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

  const component = mount(<SkipNavigation actions={actions} feedbackUrl={feedbackUrl} />);

  it("Should pass props", () => {
    expect(component.prop("feedbackUrl")).toBe(feedbackUrl);
    expect(component.prop("actions")).toBe(actions);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
