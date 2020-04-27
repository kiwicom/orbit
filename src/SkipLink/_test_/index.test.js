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
  const buttonLabel = "https://www.kiwi.com/en/";

  const component = shallow(<SkipLink links={links} buttonLabel={buttonLabel} />);

  it("Should contain description block", () => {
    expect(component.find("SkipLink__StyledLabel").exists()).toEqual(true);
  });

  it("Should have 2 Links", () => {
    expect(component.find("SkipLink__StyledLink").at(1).exists()).toEqual(true);
  });
});
