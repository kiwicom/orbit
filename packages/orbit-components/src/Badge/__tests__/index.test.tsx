import * as React from "react";

import { render, screen } from "../../test-utils";
import Badge from "..";
import Sightseeing from "../../icons/Sightseeing";

describe("Badge", () => {
  const content = "badge";
  const type = "info";
  const dataTest = "test";
  const icon = <Sightseeing ariaLabel="sightseeing" />;
  const ariaLabel = content;

  beforeEach(() => {
    render(
      <Badge icon={icon} type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
        {content}
      </Badge>,
    );
  });

  it("should have passed props", () => {
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
    expect(screen.getByLabelText("sightseeing")).toBeInTheDocument();
  });
  it("should contain a content", () => {
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
