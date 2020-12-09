// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import PictureCard from "..";

const props = {
  height: "400px",
  dataTest: "test",
  width: "800px",
  title: "Dubai",
  label: "Family Fun",
  href: "http://weslav.com",
  external: true,
  subTitle: "Prague",
  image: {
    original: "385x320",
    code: "dubai_ae",
    name: "dubai_ae",
    placeholder: "385x320",
  },
};

describe("PictureCard", () => {
  it("should have expected DOM output", () => {
    render(<PictureCard {...props} />);
    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(screen.getByTestId(props.dataTest)).toBeInTheDocument();
    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.subTitle)).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByTestId(props.dataTest)).toHaveStyle({
      height: props.height,
      width: props.width,
    });
  });
});
