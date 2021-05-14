// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";

import BadgeList, { BadgeListItem } from "..";
import Airplane from "../../icons/Airplane";

describe("BadgeList", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const childrenDataTest = "childrenTest";
    const childrenText = "Lorem ipsum dolor sit amet";
    render(
      <BadgeList dataTest={dataTest}>
        <BadgeListItem icon={<Airplane />} dataTest={childrenDataTest}>
          {childrenText}
        </BadgeListItem>
      </BadgeList>,
    );
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId(childrenDataTest)).toBeInTheDocument();
    expect(screen.getByTestId(childrenDataTest)).toHaveTextContent(childrenText);
  });
});
