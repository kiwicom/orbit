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

## Visual regression testing

We use [Loki](https://loki.js.org/) for visual regression testing, it takes screenshots of our stories and compares them against existing references. Those that don't match are stored as images with differences marked for us to decide whether the regressions are expected, or bugs that need investigating. All images that Loki produces are in `packages/orbit-components/.loki`, however, only `references` are included in source control, `current` and `differences` are ignored.

To start testing with Loki you first need to have the following processes running:

- Docker Engine, e.g. via [Docker Desktop](https://www.docker.com/products/docker-desktop)
- `yarn dev:test` to start Storybook in test mode

Now run `yarn loki:test`, which takes a screenshot of every story and compares it to the existing reference, and think about what you're going to do for the next 20 minutes because that's usually how long this takes, which is why we usually do this only before releasing.

Once it's over, first run `git status` to see if there are any new untracked Loki references, then check whether they look as expected and commit them as new references. Next, if the tests failed, that means that there are images in the `differences` directory that require your attention, check each one of them and decide whether the regressions are expected.

### Test a specific story

If you fixed a bug that caused a specific visual regression and you want to test it again, first **save all your differences somewhere else**, e.g. temporarily rename the `differences` directory, then run:

```sh
yarn loki:test --storiesFilter '<kind> <story>' --configurationFilter <target>
```

So if your file is named `chrome_iphone7_Breadcrumbs_Back_link.png`, the command should be:

```sh
yarn loki:test --storiesFilter 'Breadcrumbs Back link' --configurationFilter chrome.iphone7
```

Very nice! But this has the side-effect of deleting all other differences from `differences`, so if you hadn't saved them elsewhere, you'd lose them and had to run all the tests again, so keep that in mind. 😅

### Track down the regression with `git bisect`

If you aren't sure where the visual regression came from, which is often the case for this workflow because the tests are being run only before releasing, you can instruct git to automatically find out which commit caused it using `git bisect`.

Make sure that Docker Engine and Storybook are still running, and run:

```sh
# decide which commit contains the regression (e.g. HEAD),
# and which doesn't (e.g. when the reference was added)
git bisect start <bad commit> <good commit>
# this starts the search, kick back and relax, drink some tea
git bisect run yarn loki:test --storiesFilter '<kind> <story>' --configurationFilter <target>
# once git finds the commit, it will stop there
# run the following to return to your starting position
git bisect reset
```

To find out when the reference was added, run `git log <path>`, for example:

```sh
git log packages/orbit-components/.loki/reference/chrome_iphone7_Breadcrumbs_Back_link.png
```

Keep in mind that the wider the range between bad and good commit is, the longer the search will take.

## Browser compatibility

This part of testing is often abandoned by people, but we are aware of how important this is for users. It’s recommended that you test your new components across different platforms and browsers. New components should work on these browsers:

<!-- AUTO-GENERATED-CONTENT:START (SUPPORTED_BROWSERS) -->

- Chrome for Android 88
- Chrome 87
- Chrome 86
- Chrome 85
- Edge 87
- Firefox 84
- Firefox 83
- IE 11
- iOS Safari 14.0-14.3
- iOS Safari 13.4-13.7
- iOS Safari 12.2-12.4
- Opera 72
- Safari 14
- Safari 13.1
- Samsung Internet 13.0
- Samsung Internet 12.0

<!-- AUTO-GENERATED-CONTENT:END -->
