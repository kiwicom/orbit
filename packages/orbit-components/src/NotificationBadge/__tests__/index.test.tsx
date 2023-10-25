import * as React from "react";

import { render, screen } from "../../test-utils";
import NotificationBadge from "..";
import Sightseeing from "../../icons/Sightseeing";

describe("NotificationBadge", () => {
  const content = "badge";
  const type = "infoSubtle";
  const dataTest = "test";
  const ariaLabel = content;

  render(
    <NotificationBadge type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
      {content}
    </NotificationBadge>,
  );

  it("should have expected DOM output", () => {
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("should have icon", () => {
    render(<NotificationBadge icon={<Sightseeing dataTest="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
