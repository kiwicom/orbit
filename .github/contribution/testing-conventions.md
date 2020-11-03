# Component testing conventions

For testing Orbit components we're using [Testing Library](https://testing-library.com/). We expect every new component to have tests, so be sure to familiarize yourself with this library. This document provides some conventions we follow when writing tests.

## Test format

Test files should generally consist of one root `describe` block which is named after the unit that you're testing, containing multiple `it` blocks which should generally start with `should`, so that test names read like sentences. Sometimes you want to nest another `describe` block within the root one to group multiple `it` blocks related to the same aspect of the unit.

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../";

describe("Button", () => {
  it("should be accessible", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });
  it("should trigger the click handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    userEvent.click(screen.getByRole("button", { name: "Click me" }));
    expect(onClick).toHaveBeenCalled();
  });
  describe("when disabled", () => {
    it("should not trigger the click handler", () => {
      const onClick = jest.fn();
      render(
        <Button onClick={onClick} disabled>
          Click me
        </Button>,
      );
      userEvent.click(screen.getByRole("button", { name: "Click me" }));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
```

## Prefer `ByRole` queries

Unless you're asserting that `dataTest` prop is being passed correctly, prefer [`ByRole`](https://testing-library.com/docs/dom-testing-library/api-queries#byrole) queries, that way you can test behavior and accessibility at the same time.

## Pass literal props directly

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
