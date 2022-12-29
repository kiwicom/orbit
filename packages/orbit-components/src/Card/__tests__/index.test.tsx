import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card, { CardSection } from "..";
import Button from "../../Button";
import { Airplane } from "../../icons";

describe("Card", () => {
  const user = userEvent.setup();

  it("default", () => {
    render(
      <Card
        dataTest="test"
        title="kek"
        description="description"
        icon={<Airplane dataTest="airplane" />}
        margin={{ top: "12px" }}
        actions={<Button>button</Button>}
      />,
    );
    expect(screen.getByTestId("test"));
    expect(screen.getByText("kek")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByTestId("airplane"));
    expect(screen.getByRole("button"));
    expect(screen.getByTestId("test")).toHaveStyle({
      marginTop: "12px",
      marginBottom: undefined,
      marginRight: undefined,
      marginLeft: undefined,
    });
  });

  it("section", () => {
    render(
      <Card>
        <CardSection
          dataTest="test"
          title="kek"
          description="description"
          icon={<Airplane dataTest="airplane" />}
          actions={<Button>action</Button>}
          expandable
          expanded
        >
          section
        </CardSection>
      </Card>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("kek")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "action" })).toBeInTheDocument();
    expect(screen.getByText("section")).toBeInTheDocument();
  });

  it("loading", () => {
    render(
      <Card loading>
        <CardSection>section</CardSection>
      </Card>,
    );
    expect(screen.queryByText("section")).not.toBeInTheDocument();
  });

  it("should be clickable", async () => {
    const onClick = jest.fn();

    render(
      <Card>
        <CardSection title="kek" onClick={onClick} />
      </Card>,
    );

    await user.click(screen.getByText("kek"));
    expect(onClick).toHaveBeenCalled();
  });

  describe("expandable", () => {
    it("controlled", async () => {
      const { rerender } = render(
        <Card>
          <CardSection title="kek" expandable expanded={false}>
            expandable
          </CardSection>
        </Card>,
      );
      const content = document.querySelector("[aria-hidden]");
      expect(content).toHaveAttribute("aria-hidden", "true");
      await user.click(screen.getByText("kek"));
      expect(content).toHaveAttribute("aria-hidden", "true");
      rerender(
        <Card>
          <CardSection title="kek" expandable expanded>
            expandable
          </CardSection>
        </Card>,
      );
      expect(content).toHaveAttribute("aria-hidden", "false");
      await user.click(screen.getByText("kek"));
      expect(content).toHaveAttribute("aria-hidden", "false");
    });

    it("uncontrolled", async () => {
      render(
        <Card>
          <CardSection title="kek" expandable>
            expandable
          </CardSection>
        </Card>,
      );
      const content = document.querySelector("[aria-hidden]");
      expect(content).toHaveAttribute("aria-hidden", "true");
      await act(() => user.click(screen.getByText("kek")));
      expect(content).toHaveAttribute("aria-hidden", "false");
    });
  });
});
