// @flow

import * as React from "react";
import { shallow } from "enzyme";

import CallOutBanner from "../index";
import Illustration from "../../Illustration/index";

describe("CallOutBanner - flat", () => {
  const title = "This is flat CallOutBanner";
  const tabIndex = "1";
  const dataTest = "test";
  const description = "Lorem ipsum dolor sit amet";
  const illustration = <Illustration name="Accommodation" size="extraSmall" />;
  const component = shallow(
    <CallOutBanner
      dataTest={dataTest}
      title={title}
      description={description}
      tabIndex={tabIndex}
      illustration={illustration}
    />,
  );
  const banner = component.find("CallOutBanner__StyledCallOutBanner");
  it("should have data-test", () => {
    expect(banner.render().prop("data-test")).toBe(dataTest);
  });
  it("should have tabIndex", () => {
    expect(banner.render().prop("tabindex")).toBe(tabIndex);
  });
  it("should have Illustration", () => {
    expect(banner.find("CallOutBanner__StyledIllustration").exists()).toBe(true);
  });
  it("should have title and description", () => {
    expect(banner.find("Heading").children().text()).toBe(title);
    expect(banner.find("Text").children().text()).toBe(description);
  });
});

describe("CallOutBanner - actionable", () => {
  const title = "This is flat CallOutBanner";
  const onClick = jest.fn();
  const description = "Lorem ipsum dolor sit amet";
  const component = shallow(
    <CallOutBanner title={title} description={description} onClick={onClick} />,
  );
  const banner = component.find("CallOutBanner__StyledCallOutBanner");
  it("should have tabIndex", () => {
    expect(banner.render().prop("tabindex")).toBe("0");
  });

  it("should be clickabel", () => {
    banner.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
