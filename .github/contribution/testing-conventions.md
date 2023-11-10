# Component testing conventions

For testing Orbit components we're using [Testing Library](https://testing-library.com/). We expect every new component to have tests, so be sure to familiarize yourself with this library. This document provides some conventions we follow when writing tests.

## Test format

Test files should generally consist of one root `describe` block which is named after the unit that you're testing, containing multiple `it` blocks which should generally start with `should`, so that test names read like sentences. Sometimes you want to nest another `describe` block within the root one to group multiple `it` blocks related to the same aspect of the unit.

```jsx
import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../";

describe("Button", () => {
  const user = userEvent.setup();

  it("should be accessible", async () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });
  it("should trigger the click handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    await user.click(screen.getByRole("button", { name: "Click me" }));
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

      await user.click(screen.getByRole("button", { name: "Click me" }));
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

describe("Button", async () => {
  const user = userEvent.setup();

  it("default", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick}>
        Click me {/* it's not necessary to save this into a variable */}
      </Button>,
    );

    const button = screen.getByRole("button");
    await user.click(button);
    expect(button).toHaveTextContent("Click me"); // you can just repeat it
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Visual regression testing

We use [Playwright component testing](https://playwright.dev/docs/test-components) for visual
regression testing, it takes screenshots of components and compares them against existing
references. See [Playwright docs](https://playwright.dev/docs/test-snapshots) for more information.

Commands:

- `yarn components test-ct` - test components, both behaviour and screenshots
- `yarn components test-ct --update-snapshots` - update screenshots

### CI

Screenshots are OS-specific. CI runs Linux on its machines. In order to generate CI-compatible
screenshots, you need to run the tests on Linux. You can do that by running the tests in Docker:

- `docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.39.0-jammy /bin/bash`
- `rm -rf packages/orbit-components/playwright/.cache`
- `yarn install --frozen-lockfile`
- `yarn components test-ct --update-snapshots`

After you're done, reset the environment:

- `rm -rf packages/orbit-components/playwright/.cache`
- `yarn install --frozen-lockfile`

Both `darwin` and `linux` screenshots are kept:

- `darwin` screenshots are for fast local development experience
- `linux` screenshots are for CI

### Track down the regression with `git bisect`

If you aren't sure where the visual regression came from, which is often the case for this workflow
because the tests are being run only before releasing, you can instruct git to automatically find
out which commit caused it using `git bisect`.

Make sure that Docker Engine and Storybook are still running, and run:

```sh
# decide which commit contains the regression (e.g. HEAD),
# and which doesn't (e.g. when the reference was added)
git bisect start <bad commit> <good commit>
# this starts the search, kick back and relax, drink some tea
git bisect run yarn components test-ct
# once git finds the commit, it will stop there
# run the following to return to your starting position
git bisect reset
```

Keep in mind that the wider the range between bad and good commit is, the longer the search will take.

## Browser compatibility

This part of testing is often abandoned by people, but we are aware of how important this is for users. It’s recommended that you test your new components across different platforms and browsers. New components should work on these browsers:

<!-- AUTO-GENERATED-CONTENT:START (SUPPORTED_BROWSERS) -->

- Chrome for Android 105
- Chrome 104
- Chrome 103
- Edge 104
- Edge 103
- Firefox 103
- Safari on iOS 15.6
- Safari on iOS 15.5
- Safari on iOS 15.4
- Safari on iOS 14.5-14.8
- Safari on iOS 14.0-14.4
- Safari on iOS 12.2-12.5
- Opera 89
- Safari 15.6
- Safari 15.5
- Samsung Internet 18.0
- Samsung Internet 17.0

<!-- AUTO-GENERATED-CONTENT:END -->
