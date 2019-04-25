// @flow
import * as React from "react";
import { mount } from "enzyme";

import SkipNavigation from "..";

describe("SkipNavigation", () => {
  const component = mount(
    <SkipNavigation
      actions={[
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
      ]}
      feedbackUrl="#"
    />,
  );

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
