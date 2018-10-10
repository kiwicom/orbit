// @flow
import * as React from "react";
import renderer from "react-test-renderer";

import Text from "../index";

describe("Text", () => {
  const text = "Children text";

  const test1 = renderer
    .create(
      <Text type="primary" size="small" italic weight="bold" align="center">
        {text}
      </Text>,
    )
    .toJSON();

  it("test1 should match snapshot", () => {
    expect(test1).toMatchSnapshot();
  });

  const test2 = renderer
    .create(
      <Text type="critical" size="large" weight="normal" uppercase align="right">
        {text}
      </Text>,
    )
    .toJSON();

  it("test2 should match snapshot", () => {
    expect(test2).toMatchSnapshot();
  });
});
