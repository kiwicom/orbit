// @flow
import * as React from "react";
import { render } from "@testing-library/react";

// TODO: it is failing without it, seems like @testing-library does not see it in global config
import "jest-styled-components";
import Tooltip from "../index";
import Airplane from "../../../icons/Airplane";

describe("Tooltip", () => {
  const content = "Write some message to the user";
  jest.spyOn(React, "useMemo").mockImplementationOnce(() => "TooltipID50000-id-50000");

  const { container } = render(
    <Tooltip content={content}>
      <Airplane />
    </Tooltip>,
  );

  it("it should match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
