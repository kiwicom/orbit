// @flow
import * as React from "react";
import renderer from "react-test-renderer";

import Text from "../index";

describe("Text", () => {
  const text = "Children text";
  const component = renderer
    .create(
      <Text type="primary" size="small">
        {text}
      </Text>,
    )
    .toJSON();

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
