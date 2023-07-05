import React from "react";

import CountryFlag from "..";
import { render, screen, cleanup } from "../../test-utils";
import { baseURL, SIZE_WIDTHS } from "../consts";

describe("CountryFlag", () => {
  it("should have expected DOM output", () => {
    render(<CountryFlag code="anywhere" name="Anywhere" dataTest="test" />);
    const flag = screen.getByRole("img", { name: "Anywhere" });
    expect(flag).toHaveAttribute(
      "src",
      `${baseURL}/flags/${SIZE_WIDTHS.medium}x0/flag-anywhere.jpg`,
    );
    expect(flag).toHaveAttribute(
      "srcset",
      `${baseURL}/flags/${SIZE_WIDTHS.medium * 2}x0/flag-anywhere.jpg 2x`,
    );
    expect(screen.getByTitle("Anywhere")).toBeInTheDocument();
    expect(screen.getByAltText("Anywhere")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
  it("should support omitting code and name", () => {
    let flag;
    render(<CountryFlag />);
    flag = screen.getByRole("img", { name: "Undefined" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("undefined"));
    cleanup();
    render(<CountryFlag name="Country" />);
    flag = screen.getByRole("img", { name: "Country" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("undefined"));
    cleanup();
    render(<CountryFlag code="us" />);
    flag = screen.getByRole("img");
    expect(flag).toHaveAttribute("src", expect.stringContaining("us"));
    expect(flag).not.toHaveAttribute("alt");
    expect(flag).not.toHaveAttribute("title");
  });
  it("should warn and fallback on unknown code", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(<CountryFlag code="404" name="Country" />);
    const flag = screen.getByRole("img", { name: "Country" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("undefined"));
    expect(consoleSpy).toHaveBeenCalledWith("Country code not supported: 404");
    consoleSpy.mockRestore();
  });
  it("should support case insensitive code", () => {
    render(<CountryFlag code="US" />);
    const flag = screen.getByRole("img");
    expect(flag).toHaveAttribute("src", expect.stringContaining("us"));
  });

  it("should have the correct styles", () => {
    render(<CountryFlag code="us" />);
    const flag = screen.getByRole("img");
    const wrapper = flag.parentElement;

    expect(flag).toHaveStyle({ display: "block", height: "100%", width: "100%", "flex-shrink": 0 });

    expect(wrapper).toHaveStyle({
      position: "relative",
      "background-color": "transparent",
      "border-radius": "2px",
      overflow: "hidden",
      "flex-shrink": 0,
      width: "24px",
      height: "13px",
    });
  });

  it("should have the correct size", () => {
    render(<CountryFlag code="us" size="small" />);

    const flag = screen.getByRole("img");
    const wrapper = flag.parentElement;

    expect(flag).toHaveAttribute("src", `${baseURL}/flags/${SIZE_WIDTHS.small}x0/flag-us.jpg`);
    expect(flag).toHaveAttribute(
      "srcset",
      `${baseURL}/flags/${SIZE_WIDTHS.small * 2}x0/flag-us.jpg 2x`,
    );
    expect(wrapper).toHaveStyle({ width: "16px", height: "9px" });
  });
});
