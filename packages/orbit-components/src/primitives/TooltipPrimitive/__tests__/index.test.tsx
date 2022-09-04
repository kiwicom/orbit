import * as React from "react";
import { render } from "@testing-library/react";

import Tooltip from "..";
import Airplane from "../../../icons/Airplane";

describe("Tooltip", () => {
  it("it should match snapshot", () => {
    const content = "Write some message to the user";
    const { container } = render(
      <Tooltip content={content}>
        <Airplane />
      </Tooltip>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
