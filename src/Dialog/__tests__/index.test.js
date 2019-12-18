// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Dialog from "../index";
import Button from "../../Button";
import Heading from "../../Heading";
import Text from "../../Text";

describe("Dialog", () => {
  const dataTest = "test";
  const title = "Log out";
  const description = "Are you sure you want to log out now?";
  const component = shallow(
    <Dialog
      dataTest={dataTest}
      title={title}
      description={description}
      primaryAction={<Button type="critical">Log out</Button>}
      secondaryAction={<Button type="secondary">Close</Button>}
    />,
  );
  it("should have passed props correctly", () => {
    expect(
      component
        .find(Heading)
        .children()
        .text(),
    ).toBe(title);
    expect(
      component
        .find(Text)
        .children()
        .text(),
    ).toBe(description);
  });
});
