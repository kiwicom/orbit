// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import MatchMediaMock from "jest-matchmedia-mock";

import * as examples from "./examples";

// $FlowFixMe
let matchMedia: MatchMediaMock;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

afterAll(() => {
  matchMedia.destroy();
});

describe("GitHub examples", () => {
  it.each(Object.keys(examples).map(k => [examples[k].info.title, examples[k].Example]))(
    "Rendering example %p",
    (name, Example) => {
      render(<Example />);
    },
  );
});
