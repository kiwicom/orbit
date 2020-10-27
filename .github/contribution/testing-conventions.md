# Component testing conventions

For testing Orbit components we're using [Testing Library](https://testing-library.com/). We expect every new component to have tests, so be sure to familiarize yourself with this library. This document provides some conventions we follow when writing tests.

## Prefer `ByRole` queries

Unless you're asserting that `dataTest` prop is being passed correctly, prefer [`ByRole`](https://testing-library.com/docs/dom-testing-library/api-queries#byrole) queries, that way you can test behavior and accessibility at the same time.

### Pass literal props directly

It's not necessary to save every prop value in a variable just because you're asserting it later, only save objects like `onClick` because you need the reference to test it:

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../";

describe("Button", () => {
  it("default", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick}>
        Click me {/* it's not necessary to save this into a variable */}
      </Button>,
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toHaveTextContent("Click me"); // you can just repeat it
    expect(onClick).toHaveBeenCalled();
  });
});
```

### Test

This section should contain all test occurrences that you want to test. Function `describe` should always be the name of the Component and it’s used only once. `it` function name always starts with “should” and continues with the appropriate name for the test occurrence. E.g. “should match snapshot”

```jsx
describe("Component", () => {
  it("should have text", () => {
    expect(screen.getByRole("link")).toHaveTextContent(text);
  });

  it("should match snapshot", () => {
    expect(screen.getByRole("link")).toMatchSnapshot();
  });
});
```

## Browser compatibility

This part of testing is often abandoned by people, but we are aware of how important this is for users. It’s recommended that you test your new components across different platforms and browsers. New components should work on these browsers:

<!-- AUTO-GENERATED-CONTENT:START (SUPPORTED_BROWSERS) -->

- Chrome for Android 84
- Chrome 84
- Chrome 83
- Chrome 81
- Edge 84
- Edge 83
- Edge 18
- Firefox 78
- Firefox 77
- IE 11
- iOS Safari 13.4-13.5
- iOS Safari 13.3
- iOS Safari 13.0-13.1
- iOS Safari 12.2-12.4
- Opera 68
- Safari 13.1
- Samsung Internet 12.0
- Samsung Internet 11.1-11.2

<!-- AUTO-GENERATED-CONTENT:END -->
