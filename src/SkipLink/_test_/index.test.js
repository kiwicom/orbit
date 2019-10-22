// @flow
import * as React from "react";
import { shallow } from "enzyme";

import SkipLink from "..";

describe("SkipLink", () => {
  const links = [
    {
      href: "https://www.kiwi.com/cz/pages/content/terms",
      name: "Got to terms and condition",
    },
    {
      name: "Reguest refund",
      href: "#link",
    },
  ];
  const description = "https://www.kiwi.com/en/";

  const component = shallow(<SkipLink links={links} description={description} />);

  it("Should contain description block", () => {
    expect(component.find("SkipLink__StyledDescription").exists()).toEqual(true);
  });

  it("Should have 2 Links", () => {
    expect(
      component
        .find("SkipLink__StyledLink")
        .at(1)
        .exists(),
    ).toEqual(true);
  });
});
