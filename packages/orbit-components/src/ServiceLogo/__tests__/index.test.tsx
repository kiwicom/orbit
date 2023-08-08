import * as React from "react";
import { render, screen } from "@testing-library/react";

import { NAME_OPTIONS, SIZE_OPTIONS, baseURL } from "../consts";
import ServiceLogo from "..";

const name = NAME_OPTIONS.AIRHELP;

describe(`ServiceLogo`, () => {
  it("should have expected DOM output", () => {
    const IMAGE_PATH = `${baseURL}/logos/0x24/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos/0x48/${name}.png`;
    const dataTest = "test";

    render(<ServiceLogo dataTest={dataTest} name={name} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", IMAGE_PATH);
    expect(screen.getByRole("img")).toHaveAttribute("srcSet", `${IMAGE_PATH_RETINA} 2x`);
    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("should be grayscale", () => {
    render(<ServiceLogo name={name} grayScale />);

    const IMAGE_PATH = `${baseURL}/logos-grayscale/0x24/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos-grayscale/0x48/${name}.png`;

    expect(screen.getByRole("img")).toHaveAttribute("src", IMAGE_PATH);
    expect(screen.getByRole("img")).toHaveAttribute("srcSet", `${IMAGE_PATH_RETINA} 2x`);
  });

  it("should be small", () => {
    render(<ServiceLogo name={name} size={SIZE_OPTIONS.SMALL} />);

    const IMAGE_PATH = `${baseURL}/logos/0x12/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos/0x24/${name}.png`;

    expect(screen.getByRole("img")).toHaveAttribute("src", IMAGE_PATH);
    expect(screen.getByRole("img")).toHaveAttribute("srcSet", `${IMAGE_PATH_RETINA} 2x`);
  });

  it("should be large", () => {
    render(<ServiceLogo name={name} size={SIZE_OPTIONS.LARGE} />);

    const IMAGE_PATH = `${baseURL}/logos/0x48/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos/0x96/${name}.png`;

    expect(screen.getByRole("img")).toHaveAttribute("src", IMAGE_PATH);
    expect(screen.getByRole("img")).toHaveAttribute("srcSet", `${IMAGE_PATH_RETINA} 2x`);
  });
});
